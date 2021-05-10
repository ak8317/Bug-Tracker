const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handleFactory');
const Bug = require('../models/bugModel');

exports.setProjectUserIds = (req, res, next) => {
  if (!req.body.project) req.body.project = req.params.projectId;
  if (!req.body.submitter) req.body.submitter = req.user.id;
  next();
};

exports.getBugs = factory.getAll(Bug);

exports.addBug = factory.createOne(Bug);

exports.getBug = factory.getOne(Bug, { path: 'assignedTo' });

exports.updateBug = factory.updateOne(Bug);

exports.deleteBug = factory.deleteOne(Bug);
