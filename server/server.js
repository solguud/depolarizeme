var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var routes = require("./routes.js");

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.static('client'))
app.use(bodyParser.json())
var rootPath = path.normalize(__dirname + "/..");

app.listen(process.env.PORT || 3000, function() {
  console.log('Server is running on port ', process.env.PORT || 3000);
  console.log("current directory is " + rootPath);
});

//serve static files.
app.get("/compiled/*", (req, res) => {
  console.log("sending file: ", req.url);
  res.sendFile(path.join(rootPath + req.url));
})

app.get("/", (req, res) => {
  console.log("sending file: index.html");
  res.sendFile(path.join(rootPath + "/client/index.html"));
})

routes(app);