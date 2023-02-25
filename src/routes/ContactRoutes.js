const express = require('express');
const router = express.Router();

const ContactControllers = require("../controllers/ContactsController");

router.get('/contact', ContactControllers.getContacts);

module.exports = router;