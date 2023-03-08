//Primero instalamos el paquete celsius con "npm i celsius"
//despues usamos el init -y para inicializar el npm que previamente instalamos
//despues comprobamos que era el paquete correcto copiando un codigo fuente que venia en la pagina de donde sacamos del paquete
const { toCelsius } = require("celsius");
 
console.log(toCelsius(100)); // 38
console.log(toCelsius(100, 3)); // 37.778
console.log(toCelsius('105.981 degrees F', 5)); // 41.10056

//aqui probamos que funcionara bien usando otro codigo que venia en la pagina pero con diferentes conversiones
const { toFahrenheit } = require('celsius');
 
console.log(toFahrenheit(36)); // 97
console.log(toFahrenheit(36.68, 3)); // 98.024
console.log(toFahrenheit('-40.691 degrees C', 5)); // -41.24380

//aqui hicimos nuestra propia prueba sin el codigo funte de la pagina para ver si de verdad funcionaba
// como nosotros queriamos y la verdad si funciono 
const converse =  require ('celsius');

console.log(converse.toCelsius(99));
console.log(converse.toFahrenheit(36));

//aparte de eso hice uno cambio para ver diferentes resultados a los que ya vienen por defecto y saque los calculos para asegurarme de que esta correcto y funciona bien