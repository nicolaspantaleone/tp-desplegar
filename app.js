const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.set('puerto',process.env.PORT || 3001);

app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"));
})

app.get("/views/register.html", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/register.html"));
})

app.get("/views/login.html", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/login.html"));
})

app.get("/views/home.html", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"));
})