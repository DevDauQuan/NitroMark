const express = require("express");
const router = express.Router();
const { createUser, loginUserCtrl, getAllUser, getUser, deleteUser, updateUser, unblockUser, blockUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword } = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");


router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);
router.post('/login', loginUserCtrl);
router.put("/password", authMiddleware, updatePassword)

router.get('/all-users', getAllUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout)
router.get('/:id', authMiddleware, isAdmin, getUser);

router.put('/edit-user', authMiddleware, updateUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.put('/block-user/:id', authMiddleware, blockUser);

router.delete('/:id', deleteUser);

module.exports = router;