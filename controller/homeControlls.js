const user = require("../models/User");
const mongoose = require("mongoose");
exports.home = (req, res) => {
  res.render("home");
};
exports.login = (req, res) => {
  res.render("login");
};
exports.loginSubmit = (req, res, next) => {
  const userData = {
    name: req.body.email,
    password: req.body.password,
    address: req.body.address,
  };
  const result = user.create(userData);
  if (result) {
    res.render("login");
  } else {
    res.send('<script>alert("error")</script>');
  }
};

exports.display = (req, res) => {
  var result = user.find((err, doc) => {
    res.render("display", { data: doc });
  });
};
