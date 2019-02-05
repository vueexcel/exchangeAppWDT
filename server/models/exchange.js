const mongoose = require("mongoose");
const db = require("../db.js");
let Schema = mongoose.Schema;

let ExchangeSchema = new Schema({
  exchangeName: String,
  user:String
});

module.exports = db.conn.model("EXCHANGE", ExchangeSchema);
