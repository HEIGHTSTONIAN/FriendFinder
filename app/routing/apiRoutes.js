var express = require("express");
var friends = require("../data/friends.js");


var apiRouter = express.Router()


apiRouter.get("/api/friends", function(req, res){
  res.json(friends)
})

apiRouter.post("/api/friends", function(req, res) {
console.log(req.body);
})

module.exports = apiRouter
