var express = require('express'); // inyectamos las dependencias de express
var app = express(); // creamos una instancia de express
var port = process.env.PORT || 3000; // creamos un puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public')); // creamos una ruta para los archivos estaticos
app.set('view engine', 'ejs'); // creamos una ruta para los archivos estaticos

app.use('/', function(req, res, next) { // creamos una funcion que se ejecutara antes de que se ejecute cualquier otra funcion
    console.log('Request URL: ' + req.url);
    next();
});

app.get('/', function(req, res) { // creamos una ruta para la pagina principal
    res.render('index');
});

app.get('/person/:id', function(req, res) { // creamos una ruta para agregar un id a la url
    res.render('person', {ID: req.params.id}); 
});

app.get('/api', function(req, res) { // creamos una ruta para la api
    res.json({ firstname: 'John', lastname: 'Doe' }); 
});

app.listen(port); // creamos un puerto para que escuche el servidor