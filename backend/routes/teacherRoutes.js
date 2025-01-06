const express = require('express');
const router = express.Router();
const { getAllTeachers, getTeacherSubjects } = require('../controllers/teacherController');

router.get('/', getAllTeachers); // List all teachers
router.get('/:teacherName', getTeacherSubjects); // Get subjects taught by a specific teacher

module.exports = router;