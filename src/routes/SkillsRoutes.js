const express = require('express');
const router = express.Router();

const SkillsControllers = require("../controllers/SkillsController");

router.get('/skills', SkillsControllers.getSkill);

module.exports = router;