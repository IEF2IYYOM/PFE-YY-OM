
const express = require('express');
const router = express.Router();
const { signup, login, logout, singleUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/signup', signup);
router.post('/login', login);
router.get('/:id', singleUser);
router.get('/logout', authMiddleware, logout);


module.exports = router;
