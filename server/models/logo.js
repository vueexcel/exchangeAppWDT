const mongoose = require("mongoose");
const db = require("../db.js");
let Schema = mongoose.Schema;

let logoSchema = new Schema({
  user: String,
  logoPath:String,
  type: String
});

module.exports = db.conn.model("LOGO", logoSchema);
