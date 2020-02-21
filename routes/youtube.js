const express = require("express");
const youtube = express.Router();
const youtubeDB   = require("../model/youtubeDB")

youtube.post('/post',(req,res) => {
    var data = {
        title : req.body.title,
        description : req.body.description,
        video : req.body.video
    }
    youtubeDB.post_data(data)
    .then(() => {
        res.send("insert")
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = youtube