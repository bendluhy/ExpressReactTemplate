var express = require("express");

var app = express();
app.get("/",(req,res) =>
{
    res.send("Hello World");
})
app.get("/find/tweet", (req,res) =>
{
    var tweet = 
    {
        title: "My first tweet",
        user: "bendluhy",
        description: "First tweet on bikecity"
    }
    res.json(tweet);
})
const port = 5000;

app.listen(port, () =>
{
    console.log("Server Running on https://localhost:" + port)
})