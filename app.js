var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function (req, res){
  cad = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/assets/style.css" type="text/css">
      <title>Document</title>
  </head>
  <body> Hello World, this is the root route update
      
  </body>
  </html>`
  res.send(cad);
});

app.get('/api', function (req, res) {
    res.json({fistrname: 'John', Lastname: 'Doe'});

});

app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person:' + req.params.id + '</h1></body></html>');

});

app.listen(port);