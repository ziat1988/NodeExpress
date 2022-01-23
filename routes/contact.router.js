const express = require('express');
const contactController = require("../controllers/contact.controller");

const contactRouter = express.Router();

contactRouter.get('/', contactController.getContact)

module.exports = contactRouter;