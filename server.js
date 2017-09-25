var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();

var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//app.use(express.static('./app/public'))//
app.use('/',htmlRoutes)
app.use('/',apiRoutes)

app.listen(port, function(){
  console.log("server running on port", port);

});
