const express = require("express");
const youtube = express.Router();
const youtubeDB   = require("../model/youtubeDB")
var getYouTubeID = require('get-youtube-id');

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
youtube.put('/putData/:id',(req,res) => {
    var id = req.params.id
    var updata = {
        title : req.body.title,
        description : req.body.description,
        video : req.body.video
    }
    youtubeDB.putdata(id,updata) 
    .then(() => {
        res.send('update')
    }).catch((err) => {
        res.send(err)
    })
});

// 3
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

// 4
youtube.get('/get',(req,res) => {
    youtubeDB.getdata()
    .then((Response) => {
    for (var i = 0; i < Response.length; i++){
        var video = Response[i]['video']
        var video_id = getYouTubeID(video);
    }
    res.send({video_id})
    }).catch((err) => {
        res.send(err)
    })
});

// 5
youtube.put('/put/:search',(req,res) => {
    var search = req.params.search
    var updata = {
        title : req.body.title,
        description : req.body.description,
        video : req.body.video
    }
    youtubeDB.put_data(updata,search)
    .then(() => {
        res.send('update')
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = youtube