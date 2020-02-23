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

// 6
youtube.post('/post_data',(req,res) => {
    var updata = {
        Name : req.body.Name,
        Email : req.body.Email,
        Password : req.body.Password
    }
    youtubeDB.postData(updata)
    .then(() => {
        res.send('insert')
    }).catch((err) => {
        res.send(err)
    })
});

// 7
youtube.post("/access",(req,res)=>{
    let Email = req.body.Email;
    let Password = req.body.Password;
    youtubeDB.access_login(Email)
    .then((data)=>{
        if(data.length == 0){
            res.send('worng Email')
        }else{youtubeDB.else_login(Password).then((data)=>{
            if(data.length == 0){
                res.send('wrong Password ')
            }else{
                var data = {
                    title : "Asal Mein - Darshan Raval | Official Video | Indie Music Label",
                    description : "wow nice song",
                    video : "https://www.youtube.com/watch?v=beqprrnaKFc"
                }
                youtubeDB.putdate(data)
                .then(() => {
                    res.send('insert')
                })
                }
            })
        }
    }).catch((err)=>{
        console.log(err);
    })
});

module.exports = youtube