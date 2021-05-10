const router = require('express').Router({ mergeParams: true });

const { protect } = require('../controller/authController');
const {
  getBug,
  getBugs,
  addBug,
  updateBug,
  deleteBug,
  setProjectUserIds,
} = require('../controller/bugController');

router.route('/').get(getBugs).post(protect, setProjectUserIds, addBug);

router
  .route('/:id')
  .get(getBug)
  .patch(protect, updateBug)
  .delete(protect, deleteBug);

module.exports = router;
