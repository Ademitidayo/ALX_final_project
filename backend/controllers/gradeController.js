const Grade = require('../models/gradeModel');
const Subject = require('../models/Subject');

const addOrUpdateGrade = async (req, res) => {
  try {
    const { student_id, subject_id, scores } = req.body;
    const teacher_id = req.user._id;

    const subject = await Subject.findById(subject_id);
    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });

    const subject = await Subject.findOne({ _id: subject_id, teacher_id });
    }
    if (!subject) {
      return res.status(403).json({ error: 'You are not authorized to grade this subject' });
    }

    const totalScore = scores.continuous_assessment.reduce((a, b) => a + b, 0) +
                       scores.midterm_exam +
                       scores.final_exam;

    // Check if a grade already exists for this student and subject
    let grade = await Grade.findOne({ student_id, subject_id });

    if (grade) {
      // Update the existing grade
      grade.scores = scores;
      grade.total_score = totalScore;
      await grade.save();
      return res.status(200).json({ message: 'Grade updated successfully', grade });
    } else {
      // Create a new grade
      grade = new Grade({ student_id, subject_id, scores, total_score: totalScore });
      await grade.save();
      return res.status(201).json({ message: 'Grade added successfully', grade });
    }
} catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getGradesForTeacher = async (req, res) => {
  try {
    const teacher_id = req.user._id; // Assuming teacher's ID is in req.user

    // Find all subjects assigned to the teacher
    const subjects = await Subject.find({ teacher_id });
    const subjectIds = subjects.map(subject => subject._id);

    // Find grades for the teacher's subjects
    const grades = await Grade.find({ subject_id: { $in: subjectIds } })
      .populate('student_id', 'name') // Populate student details
      .populate('subject_id', 'name class_level'); // Populate subject details

    res.status(200).json({ grades });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addOrUpdateGrade, getGradesForTeacher };