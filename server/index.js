const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require("./config/keys");
mongoose.connect(mongoURI);
require("./models/User");
require("./services/yelp");
const app = express();
const User = mongoose.model("users");
new User({
  id: "121",
  AmazonID: "1234",
  FirstName: "Luis",
  LastName: "Chavez",
  Age: "20",
  Income: 3650000
}).save();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);
