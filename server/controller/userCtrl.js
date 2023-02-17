const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../configs/jwtToken");
const { generateRefreshToken } = require("../configs/refreshToken");
const validateMongoDbId = require("../utils/validateMongodbId");
const jwt = require("jsonwebtoken");
const sendMail = require("./emailCtrl");
const crypto = require("crypto");


const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        // Create new User
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        // User already exist
        throw new Error("User already exist");
    }
});

// login
const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //check user existed
    const user = await User.findOne({ email });
    if (user && (await user.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(user?.id);
        const updateTokenUser = await User.findByIdAndUpdate(user?.id, {
            refreshToken: refreshToken,
        }, { new: true });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        })
        res.json({
            _id: user?._id,
            firstname: user?.firstname,
            lastname: user?.lastname,
            email: user?.email,
            mobile: user?.mobile,
            token: generateToken(user?._id),
        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

//refreshToken
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;

    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error("No Refresh Token present in db or not matched");
    jwt.verify(refreshToken, process.env.JWT_SECRET, ((err, decode) => {
        if (err || user.id !== decode.id) {
            throw new Error("Something wrong");
        }
        const accessToken = generateToken(user.id);
        res.json({ accessToken })

    }));
});

//logout 
const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");

    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });

    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
        })
        return res.sendStatus(204); //forbidden
    }
    await User.findOneAndUpdate(refreshToken, {
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    })
    return res.sendStatus(204); //forbidden
})


//update user 
const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        const user = await User.findByIdAndUpdate(_id, {
            firstname: req?.body.firstname,
            lastname: req?.body.lastname,
            email: req?.body.email,
            mobile: req?.body.mobile
        }, {
            new: true
        }
        );
        res.json(user);
    } catch (error) {
        throw new Error(error)
    }
})


//Get all user 
const getAllUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);

    } catch (error) {
        throw new Error(error);
    }
})

//get user
const getUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        validateMongoDbId(id);

        const user = await User.findById(id)

        res.json({ user })

    } catch (error) {
        throw new Error(error);
    }
})

//delete user
const deleteUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        validateMongoDbId(id);
        const user = await User.findByIdAndDelete(id)

        res.json({ user })

    } catch (error) {
        throw new Error(error);
    }
});

// block user
const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const blockUser = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: true,
            },
            {
                new: true,
            }
        );
        res.json({
            message: "User blocked",
        })
    } catch (error) {
        throw new Error(error);
    }
});

//unblock user
const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const blockUser = await User.findByIdAndUpdate(id, {
            isBlocked: false
        }, { new: true });
        res.json({
            message: "User unblocked"
        })
    } catch (error) {
        throw new Error(error);
    }
})


// update passwork
const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateMongoDbId(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    } else {
        res.json(user);
    }
})

// forgot Password
const forgotPasswordToken = asyncHandler(async (req, res) => {
    const { email } = req.body;;
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    try {
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetUrl = `http://localhost:5000/api/user/reset-password/${token}`;
        const data = {
            to: email,
            text: `Reset Your Password`,
            subject: "Forgot Password Link",
            htm: resetUrl
        }
        sendMail(data);
        res.json(token);
    } catch (error) {
        throw new Error(error);
    }
})


//Reset Password
const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error("Token Expired, Please try again!!!");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
});





module.exports = { createUser, loginUserCtrl, getAllUser, getUser, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword }