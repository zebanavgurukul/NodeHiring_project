const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const youtube = require("./routes/youtube")
app.use("/youtube",youtube)

app.listen(7000, () => {
    console.log("server is listening 7000.........")
});