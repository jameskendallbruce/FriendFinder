var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Require the routes js files
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

