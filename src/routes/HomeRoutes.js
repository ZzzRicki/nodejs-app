const express = require('express');
const router = express.Router();

const HomeControllers = require("../controllers/HomeController");

router.get('/', HomeControllers.getHome);

module.exports = router;