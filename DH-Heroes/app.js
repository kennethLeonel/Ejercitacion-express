const express = require('express');
const app = express(); // se crea una instancia de express
const path = require('path');

// Se Habilita la carpeta public para que se pueda acceder a ella
app.use(express.static(path.join(__dirname, 'public'))); // se indica que el directorio public es el que se va a servir
// otra forma
// app.use(express.static('public'));



// Metodo GET
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
    
});


app.get("/babbage", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/babbage.html"));
});

app.get("/berners-lee", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/berners-lee.html"));
});

app.get("/clarke", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/clarke.html"));
});

app.get("/hamilton", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/hamilton.html"));
});

app.get("/hopper", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/hopper.html"));
});

app.get("/lovelace", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/lovelace.html"));
});

app.get("/turing", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/turing.html"));
});

//Se levanta el servidor
app.listen(3030, () => {
    console.log('Server corriendo en el puerto 3030');  
});