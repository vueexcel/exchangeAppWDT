const logo = require("../models/logo");
const fs = require("fs");
const path = require('path');

exports.createLogo = async function(req, res) {
  try {
    let updateLogo = await logo.findOneAndReplace({user:req.body.user},req.body)
    if(updateLogo){
      res.json({ error: 0, message: "success" });
    }else{
      let data = await logo.create(req.body);
      res.json({ error: 0, message: "success" });
    }
  } catch (err) {
    res.status(400).json({ error: 1, err: err });
  }
};

exports.getLogo = async function(req, res) {
  try {
    var img = fs.readFileSync(path.join(__dirname, `../public/world.png`));
    res.send(img)
  } catch (err) {
    res.status(400).json({ error: 1, err: err });
  }
};