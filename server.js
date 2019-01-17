var express = require("express");
var app = express();
var routes = require("./app/routing")
var PORT = 3003;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
