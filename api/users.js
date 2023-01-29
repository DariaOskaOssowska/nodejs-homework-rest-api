const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const { authorizeUser } = require('../middlewares/authorization');

router.post('/signup', authorizeUser, userController.register);
router.post('/login', userController.login);
router.get('/logout', authorizeUser, userController.logout);
router.get('/current', authorizeUser, userController.current);
router.patch('/:userId/subscription', authorizeUser, userController.updateSubscription);

module.exports = router;
