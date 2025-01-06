const express = require('express');
const router = express.Router();
const { getStudentsByClass } = require('../controllers/studentController');

router.get('/:classLevel', getStudentsByClass); // Get all students in a specific class

module.exports = router;