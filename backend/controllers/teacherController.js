const Teacher = require('../models/Teacher');

const getAllTeachers = async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
};

const getTeacherSubjects = async (req, res) => {
  const { teacherName } = req.params;
  const teacher = await Teacher.findOne({ name: teacherName.replace('-', ' ') });

  if (!teacher) {
    return res.status(404).json({ message: 'Teacher not found' });
  }

  res.json(teacher.subjects);
};

module.exports = { getAllTeachers, getTeacherSubjects };