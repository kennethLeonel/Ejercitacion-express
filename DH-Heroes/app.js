const express = require('express');
const app = express(); // se crea una instancia de express
const path = require('path');

// Se Habilita la carpeta public para que se pueda acceder a ella
app.use(express.static(path.join(__dirname, 'public'))); // se indica que el directorio public es el que se va a servir
// otra forma
// app.use(express.static('public'));

// Metodo GET
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
    
});

//Se levanta el servidor
app.listen(3030, () => {
    console.log('Server corriendo en el puerto 3030');  
});