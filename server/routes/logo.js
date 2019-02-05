const express = require("express");
const router = express.Router();
const logo = require("../controllers/logo");

router.post("/logo/createLogo", logo.createLogo);

router.get("/logo/getLogo/:user", logo.getLogo);

module.exports = router;
