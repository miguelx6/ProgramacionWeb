const express = require('express'); // Importamos express para poder usarlo
const app = express(); // Creamos una instancia de express

app.get('/', (req, res) => { // Creamos una ruta con el método get con codigo en html
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> Hi bby :3</h1>
    </body>
    </html>`);
});

app.get('/uno', (req, res) => { // Creamos una ruta con el método get con texto plano
    res.send('Hello world, from route one');
});

app.get('/prueba', (req, res) => {
    res.send('Hello world, from route prueba');
});

app.listen(3000); // Le decimos a express que escuche en el puerto 3000