const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const publicPath = path.resolve(__dirname, "./public");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/home.html"));
})

app.get("/views/register.html", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/register.html"));
})

app.get("/views/login.html", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/login.html"));
})

app.get("/views/home.html", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/home.html"));
})


app.listen(3001, () => console.log("Nice server 3001"));