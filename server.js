var express = require("express");
var app = express();

app.use(express.static("public"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exhbs = require("express-handlebars");
app.engine("handlebars", exhbs({ defaultLayoyt: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/games_controller.js");
app.use(routes);

var PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

//DB connection
require("./src/database/connection");

require("./src/bootstrap")();
