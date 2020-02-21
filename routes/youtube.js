const express = require("express");
const youtube = express.Router();
const youtubeDB   = require("../model/youtubeDB")

// 1
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

// 2
youtube.post('/postData',(req,res) => {
    var data = {
        Feature : req.body.Feature,
        Private : req.body.Private,
        Unlisted : req.body.Unlisted,
        Public : req.body.Public
    }
    youtubeDB.postdata(data)
    .then(() => {
        res.send("insert")
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = youtube