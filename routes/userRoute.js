const router = require('express').Router();

const {
  signup,
  login,
  protect,
  forgotPassword,
  resetPassword,
  updatePassword,
  restrictTo,
} = require('../controller/authController');
const {
  getMe,
  getuser,
  getAllUsers,
  updateMe,
  deleteMe,
  deleteUser,
  updateUser,
} = require('../controller/userController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.route('/resetPassword/:token').patch(resetPassword);

router.use(protect);
router.get('/me', getMe, getuser);
router.patch('/updateMypassword', updatePassword);
router.patch('/updateMe', updateMe);
router.delete('/deleteMe', deleteMe);

//protect all routes with admin rights
router.use(restrictTo('admin'));

router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);
router.route('/').get(getAllUsers);
router.get('/:id', getuser);

module.exports = router;
