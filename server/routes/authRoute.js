const express = require("express");
const router = express.Router();
const { createUser, loginUserCtrl, getAllUser, getUser, deleteUser, updateUser, unblockUser, blockUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishlist, saveAddress, userCart, getUserCart, emptyCart, applyCoupon, createOrder, getOrders, getAllOrders, getOrderByUserId, updateOrderStatus, deleteOrder } = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");


router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);
router.post('/login', loginUserCtrl);
router.post('/admin-login', loginAdmin);
router.post('/cart', authMiddleware, userCart);
router.post('/cart/applycoupon', authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);

router.put("/password", authMiddleware, updatePassword)
router.put("/save-address", authMiddleware, saveAddress)

router.get('/cart', authMiddleware, getUserCart);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getOrderByUserId);
router.get("/wishlist", authMiddleware, getWishlist);
router.get('/all-users', getAllUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout)
router.get('/:id', authMiddleware, getUser);

router.put('/edit-user/:id', authMiddleware, updateUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.put('/block-user/:id', authMiddleware, blockUser);
router.put("/order/update-order/:id", authMiddleware, isAdmin, updateOrderStatus);

router.delete('/empty-cart', authMiddleware, emptyCart);
router.delete('/order/:id', authMiddleware, isAdmin, deleteOrder);
router.delete('/:id', deleteUser);

// 8:32:50
module.exports = router;