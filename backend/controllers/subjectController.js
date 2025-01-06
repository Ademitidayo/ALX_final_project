const Subject = require('../models/Subject');

const getSubjectsByClass = async (req, res) => {
  const { classLevel } = req.params;
  const subjects = await Subject.find({ class: classLevel });

  res.json(subjects);
};

module.exports = { getSubjectsByClass };