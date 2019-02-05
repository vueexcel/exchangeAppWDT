const mongoose = require("mongoose");
const db = require("../db.js");
let Schema = mongoose.Schema;


let colorThemeSchema = new Schema({
  user: String,
  color1:String,
  color2: String,
  color3: String,
  color4: String,
  color5: String
});

module.exports = db.conn.model("COLORTHEME", colorThemeSchema);
