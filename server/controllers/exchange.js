const exchange = require("../models/exchange");
const logo = require("../models/logo");
const colorTheme = require("../models/colorTheme");

exports.createExchange = async function(req, res) {
  try {
    let data = await exchange.create(req.body);
    res.json({ error: 0, data: data });
  } catch (err) {
    res.status(400).json({ error: 0, err: err });
  }
};

exports.getAllExchange = async function(req, res) {
  try {
    let data = await exchange.find({});
    res.json({ error: 0, data: data });
  } catch (err) {
    res.status(400).json({ error: 0, err: err });
  }
};

exports.updateExchange = async function(req, res) {
  try {
    let data = await exchange.update({ _id: req.body._id }, req.body);
    res.json({ error: 0, data: data });
  } catch (err) {
    res.status(400).json({ error: 0, err: err });
  }
};

exports.deleteExchange = async function(req, res) {
  try {
    let data = await exchange.remove({ _id: req.params.exchangeId });
    res.json({ error: 0, data: data });
  } catch (err) {
    res.status(400).json({ error: 0, err: err });
  }
};

exports.getLogoAndTheme = async function(req, res) {
  try {      
    let themes = await colorTheme.find({user:req.params.user});
    let logos = await logo.find({user:req.params.user});
    let exchanges = await exchange.find({user:req.params.user});
    res.json({ error: 0, data: {colorTheme:themes,logo:logos,exchange:exchanges} });
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: 1, err: err });
  }
};

