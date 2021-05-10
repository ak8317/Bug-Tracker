const router = require('express').Router();

const { protect, restrictTo } = require('../controller/authController');
const {
  getProject,
  getProjects,
  deleteProject,
  updateProject,
  addProject,
} = require('../controller/projectController');
const bugRouter = require('./bugRoute');

//nested routes
router.use('/:projectId/bugs', bugRouter);
router
  .route('/')
  .get(getProjects)
  .post(protect, restrictTo('admin', 'manager'), addProject);

router
  .route('/:id')
  .get(getProject)
  .patch(protect, restrictTo('admin', 'manager'), updateProject)
  .delete(protect, restrictTo('admin', 'manager'), deleteProject);

module.exports = router;
