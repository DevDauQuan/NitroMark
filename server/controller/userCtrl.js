const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../configs/jwtToken");


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

//update user 
const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
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
        const user = await User.findByIdAndDelete(id)

        res.json({ user })

    } catch (error) {
        throw new Error(error);
    }
})






module.exports = { createUser, loginUserCtrl, getAllUser, getUser, deleteUser, updateUser }