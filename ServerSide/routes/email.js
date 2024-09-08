const express = require("express");
const router = express.Router();

const { sendEmail } = require("../controllers/emailsend");

router.post("/sendEmail", sendEmail);

module.exports = router;