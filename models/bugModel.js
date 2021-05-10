const mongoose = require('mongoose');

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
    timestamps: true,
  }
);

module.exports = mongoose.model('Bug', bugSchema);
