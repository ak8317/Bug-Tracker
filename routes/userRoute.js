const router = require('express').Router();

const {
  signup,
  login,
  protect,
  forgotPassword,
  resetPassword,
  updatePassword,
} = require('../controller/authController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.route('/resetPassword/:token').patch(resetPassword);

router.use(protect);
router.patch('/updateMypassword', updatePassword);

module.exports = router;
