//var Emitter = require("./emitter.js") //se inyectan dependecias
var Emitter = require("events") //se inyectan dependecias
var emtr = new Emitter(); //se crea un objeto de tipo Emitter
let config = require("./config"); //se inyectan dependecias

emtr.on(config.events.GREET, () => {//se crea una funcion que se ejecuta cuando se emite el evento GREET    
    console.log("somewhere, someone say hello"); //contenido de la funcion
});

emtr.on(config.events.GREET, () => {//se crea una funcion que se ejecuta cuando se emite el evento GREET
    console.log("a greeting occured!");//contenido de la funcion
});

emtr.on(config.events.GREET, () => {
    console.log("someone jumped");
});

console.log("Hello!"); //se ejecuta la funcion
emtr.emit("greet"); //se ejecuta la funcion greet del objeto emtr
console.log(emtr); //se imprime el objeto emtr
emtr.emit('jump'); //se ejecuta la funcion jump del objeto emtr