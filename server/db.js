const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

const uri =
  "mongodb://worldDesign123:worldDesign123@cluster0-shard-00-00-g6lxd.mongodb.net:27017,cluster0-shard-00-01-g6lxd.mongodb.net:27017,cluster0-shard-00-02-g6lxd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true/worldDesignDb";
let conn = mongoose.createConnection(uri);

module.exports = { conn: conn };
