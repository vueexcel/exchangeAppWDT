const express = require("express");
const router = express.Router();
const exchange = require("../controllers/exchange");

router.post("/exchange/createExchange", exchange.createExchange);

router.get("/exchange/getAllExchange", exchange.getAllExchange);

router.put("/exchange/updateExchange", exchange.updateExchange);

router.delete("/exchange/deleteExchange/:exchangeId", exchange.deleteExchange);

router.get("/exchange/getLogoAndTheme/:user", exchange.getLogoAndTheme);

module.exports = router;
