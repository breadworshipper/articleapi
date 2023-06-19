const mongoose = require("mongoose");
const express = require("express");

mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');

var app = express();

require("./model/article");

const articleRoute = require("./routes/articleRoute"); // Access to articelRouter object in article.js
app.use("/articles", articleRoute) // Set endpoint

var server = app.listen(3000, function(){
    console.log("Listening on port " + server.address().port);
});
