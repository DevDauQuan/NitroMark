const express = require("express");
const router = express.Router();
const { createUser, loginUserCtrl, getAllUser, getUser, deleteUser, updateUser } = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");


router.post('/register', createUser);
router.post('/login', loginUserCtrl);

router.put('/edit-user', authMiddleware, updateUser);
router.put('/block-user/:id', authMiddleware, updateUser);

router.get('/all-users', getAllUser);
router.get('/:id', authMiddleware, isAdmin, getUser);
router.delete('/:id', deleteUser);

module.exports = router;
// 1:38:20