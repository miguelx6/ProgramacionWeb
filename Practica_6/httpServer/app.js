let greet  = require('./greet1'); // Aqui se exportan las funciones greet desde su archivo correspondiente
let greet2 = require('./greet2');
const greet3 = require('./greet3');
//console.log(greet3);
const Greet4 = require('./greet4');
let myGreet = new (Greet4);
const greet5 = require('./greet5');

greet();
greet2.greet();
greet3.greet();
greet3.greeting = 'Hi desde app';// Imprimira el nuevo valor de greeting desde app.js

let greet3b = require('./greet3'); // Se crea una nueva instancia de greet3
greet3b.greet(); // se immprime el valor correspondiente cada instancia
myGreet.greet();
greet5.greet();
greet5.jump();
greet5.suma();
greet5.date();