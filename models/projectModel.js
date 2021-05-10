const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Project must have a name'],
    },
    description: {
      type: String,
    },
    personnel: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  {
    timestamps: true,
  }
);

projectSchema.virtual('bugs', {
  ref: 'Bug',
  foreignField: 'project',
  localField: '_id',
});

projectSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'personnel',
    select: 'name',
  });
  next();
});

module.exports = mongoose.model('Project', projectSchema);
