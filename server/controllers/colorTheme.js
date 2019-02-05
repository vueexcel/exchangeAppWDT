const colorTheme = require("../models/colorTheme");

exports.saveColorTheme = async function(req, res) {
  try {
    let saveColorTheme = await colorTheme.findOneAndReplace({user:req.body.user},req.body)
    if(saveColorTheme){
      res.json({ error: 0, message: "success" });
    }else{
      let data = await colorTheme.create(req.body);
      res.json({ error: 0, message: "success" });
    }
  } catch (err) {
    res.status(400).json({ error: 1, err: err });
  }
};

exports.getColorTheme = async function(req, res) {
  try {
    let data = await colorTheme.findOne({user:req.params.user});
    res.json({ error: 0, data: data });
  } catch (err) {
    res.status(400).json({ error: 1, err: err });
  }
};