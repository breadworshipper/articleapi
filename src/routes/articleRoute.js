const express = require("express");
const router = express.Router(); // Use router for individual router files
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var Article = mongoose.model("Article");

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

router.get("/", async function(req, res){
    var articles = await Article.find({}).exec();
    res.send(articles);
});

router.post("/", jsonParser, function(req, res){
    const articleTitle = req.body.title;
    const articleContent = req.body.content;

    var newArticle = new Article({
        title: articleTitle,
        content: articleContent
    });

    newArticle.save();
    res.send(newArticle);
});

module.exports = router; // Export module 
