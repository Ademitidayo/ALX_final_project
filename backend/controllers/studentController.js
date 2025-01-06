const Student = require('../models/Student');

const getStudentsByClass = async (req, res) => {
  const { classLevel } = req.params;
  const students = await Student.find({ class: classLevel });

  res.json(students);
};

module.exports = { getStudentsByClass };