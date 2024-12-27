const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  scores: {
    continuous_assessment: {
      type: [Number], // Array to hold [5, 5, 5, 15]
      validate: [arrayLimit, '{PATH} exceeds the limit of 4 scores']
    },
    midterm_exam: { type: Number, default: 0 }, // 40 = 10 + 30
    final_exam: { type: Number, default: 0 } // 60
  },
  total_score: { type: Number, default: 0 }, // Computed total
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Validator for the continuous assessment array
function arrayLimit(val) {
  return val.length <= 4;
}

// Pre-save hook to calculate the total
gradeSchema.pre('save', function (next) {
  const { continuous_assessment, midterm_exam, final_exam } = this.scores;
  const ca_total = continuous_assessment.reduce((sum, score) => sum + score, 0);
  this.total_score = ca_total + midterm_exam + final_exam;
  next();
});

module.exports = mongoose.model('Grade', gradeSchema);