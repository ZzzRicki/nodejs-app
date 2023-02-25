const express = require('express');
const router = express.Router();

const ValueControllers = require("../controllers/ValuesController");

router.get('/values', ValueControllers.getValue);

module.exports = router;