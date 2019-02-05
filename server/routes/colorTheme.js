const express = require("express");
const router = express.Router();
const colorTheme = require("../controllers/colorTheme");

router.post("/theme/saveColorTheme", colorTheme.saveColorTheme);

router.get("/theme/getColorTheme/:user", colorTheme.getColorTheme);

module.exports = router;
