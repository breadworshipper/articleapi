const express = require("express");
const router = express.Router(); // Use router for individual router files
const mongoose = require("mongoose");
var Article = mongoose.model("Article");

// TODO : GET all articles endpoint
router.get("/", async function(req, res){
    var articles = await Article.find({}).exec();
    res.send(articles);
});

module.exports = router; // Export module 
