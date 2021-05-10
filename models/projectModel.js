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

module.exports = mongoose.Model('Project', projectSchema);
