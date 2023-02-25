const express = require('express');
const router = express.Router();

const ProjectControllers = require("../controllers/ProjectController");

router.get('/projects', ProjectControllers.getProject);

module.exports = router;