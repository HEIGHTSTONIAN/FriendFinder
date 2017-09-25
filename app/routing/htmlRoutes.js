var express = require("express");
var path = require("path");

var htmlRouter = express.Router()

htmlRouter.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public", "survey.html"))
})

htmlRouter.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public", "home.html"))
})

//*htmlRouter.get("*", function(req, res) {
//  res.redirect("/")
//})

module.exports = htmlRouter
