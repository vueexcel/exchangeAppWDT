const express = require("express");
const sls = require("serverless-http");
const app = express();
const bodyParser = require("body-parser");
const hr = require("./jsonFiles/HR.json");
const client = require("./jsonFiles/Client.json");
const teamMember = require("./jsonFiles/TeamMember.json");
const cors = require("cors");
const exchange = require("./routes/exchange");
const logo = require("./routes/logo");
const colorTheme = require("./routes/colorTheme");
const db = require("./db.js");
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "5mb" }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(cookieParser())
app.use(
  cors({
    exposedHeaders: ["Link"]
  })
);

app.use(exchange);
app.use(logo);
app.use(colorTheme)
app.post("/menuGenerator", async (req, res, next) => {
  if (req.body.userName == hr.userName) {
    res.json(hr);
  } else if (req.body.userName == client.userName) {
    res.json(client);
  } else if (req.body.userName == teamMember.userName) {
    res.json(teamMember);
  } else {
    res.status(400).json({ error: 1, message: "No data found!" });
  }
});

module.exports.server = sls(app);
// app.listen(process.env.PORT || 3038, () => {
//     console.log(`Started on port 3038`);
// });