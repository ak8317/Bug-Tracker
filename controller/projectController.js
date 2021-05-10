const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handleFactory');
const Project = require('../models/projectModel');

exports.getProjects = factory.getAll(Project);

exports.addProject = factory.createOne(Project);

exports.getProject = factory.getOne(Project, { path: 'bugs' });
//exports.getProject = factory.getOne(Project);
exports.updateProject = factory.updateOne(Project);

exports.deleteProject = factory.deleteOne(Project);
