const mongoose = require('mongoose');
const Project = require('./projectModel');
const bugSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Issue must have a title'],
    },
    description: {
      type: String,
    },
    priority: {
      type: String,
      enum: {
        values: ['low', 'medium', 'high'],
        message: 'Priority is either: low, medium, high',
      },
      default: 'low',
    },
    status: {
      type: String,
      enum: {
        values: [
          'new',
          'closed',
          'in-progress',
          're-open',
          'assigned',
          'open',
          'acknowledged',
          'resolved',
          'Not fixable',
        ],
      },
      default: 'new',
    },
    assignedTo: {
      type: mongoose.Schema.ObjectId,
      red: 'User',
    },
    submitter: {
      type: mongoose.Schema.ObjectId,
      red: 'User',
    },
    project: {
      type: mongoose.Schema.ObjectId,
      ref: 'Project',
      required: [true, 'Bug/Issue must belong to a project'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  {
    timestamps: true,
  }
);

bugSchema.pre(/^find/, function (next) {
  // this.populate({
  //   path: 'project',
  //   select: 'name description -personnel -_id',
  // });
  // this.populate({
  //   path: 'assignedTo',
  //   select: 'name',
  // })
  //   .populate({
  //     path: 'submitter',
  //     select: 'name',
  //   })
  //   .populate({
  //     path: 'project',
  //     select: 'name',
  //   });

  next();
});
bugSchema.statics.calcTotalBugs = async function (projectId) {
  const stats = await this.aggregate([
    {
      $match: { project: projectId },
    },
    {
      $group: {
        _id: '$project',
        totalBugs: { $sum: 1 },
      },
    },
  ]);

  if (stats.length > 0) {
    await Project.findByIdAndUpdate(projectId, {
      totalBugs: stats[0].totalBugs,
    });
  } else {
    await Project.findByIdAndUpdate(projectId, {
      totalBugs: 0,
    });
  }
};
bugSchema.post('save', function () {
  //this points to current review
  this.constructor.calcTotalBugs(this.project);
});

bugSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.findOne();
  next();
});
bugSchema.post(/^findOneAnd/, async function () {
  // this.r = await this.findOne();-doesnt work here
  await this.r.constructor.calcTotalBugs(this.r.project);
});

module.exports = mongoose.model('Bug', bugSchema);
