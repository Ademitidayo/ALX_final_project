const express = require('express');
const { addOrUpdateGrade } = require('../controllers/gradeController');
const { getGradesForTeacher } = require('../controllers/gradeController');
const router = express.Router();

// Route to add or update grades
router.post('/grades', addOrUpdateGrade);
router.get('/grades/teacher', getGradesForTeacher);

module.exports = router;