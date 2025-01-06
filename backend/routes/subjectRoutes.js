const express = require('express');
const router = express.Router();
const { getSubjectsByClass } = require('../controllers/subjectController');

router.get('/:classLevel', getSubjectsByClass); // Get all subjects for a specific class

module.exports = router;