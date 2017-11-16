


var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

var mongoose = require("mongoose");

var mongoRef = require("./mongo.js")


// Sets up the Express App

// =============================================================
//Creates the web app that is going to be served
var app = express();
//declars the port- NOTE - This is to be changed to the port number that our hosting server uses after we are done testing all of our sites features.
var PORT = process.env.PORT || 8000;
//These to lines connect to the database this is the port number of our mongoDB
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/tradetraks");

// var promise = mongoose.createConnection('mongodb://localhost/tradetraks', 
// {
//     useMongoClient: true
// });

//creates a schema that shows how the data will be formatted in the DB values are just for testing
// var nameSchema = new mongoose.Schema(
// {
//     firstName: String,
//     lastNameName: String
// });

// var User = mongoose.model("User", nameSchema);


// // Sets up the Express app to handle data parsing

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text());

app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res)
{

    res.sendFile(path.join(__dirname, "home.html"));

});



app.get("/login", function(req, res)
{

    res.sendFile(path.join(__dirname, "home.html"));

});

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/js')));


// var publicPath = path.join(__dirname, 'public');
// app.get('/sample-template-advanced', function (req, res) {
//   res.sendfile(publicPath + '/sample-template-advanced.html');
// });



// app.get("public/currentprices", function(req, res) 
// {

//     res.sendFile(path.join(__dirname, "public/apidata/analysis/BTC/index.html"));

// });

//new
//public/apidata/analysis/BTC/index.html

//old
//public/sample-template-advanced.html


// Starts the server to begin listening

// =============================================================

app.listen(PORT, function()

{

   console.log("App listening on PORT " + PORT);

});
