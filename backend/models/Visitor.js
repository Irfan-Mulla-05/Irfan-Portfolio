const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  role: {
    type: String, // 'Student', 'Recruiter', 'Developer', 'Other', or null
  },
  skipped: {
    type: Boolean,
    default: false,
  },
  ip: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Visitor', VisitorSchema);
