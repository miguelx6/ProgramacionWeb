// Practica 3 
function greet(){
    console.log("Hello");

}
let logGreeting = (miParametro) => miParametro();

logGreeting(greet);

let logGreetings = (miParametro) => miParametro();
logGreeting(function(){
    console.log("Hello from a function created on the fly");
});

//Interpolación de strings normal
let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + " buenos dias! Tu color favorito es el " + miColor);
}

logGreeting1("Karla", "Rojo");

//Parametros
let color = "rojo";
let talla = "XXL";
let modelo = "Polo";

//Aqui tenemos una representacion de la diferencia de las oraciones sin contaminacion y concatenacion.
console.log("Karla tiene una playera talla" + talla + "de color" + color + "modelo" + modelo);
console.log(`Karla tiene una playera 
talla ${talla}
de color ${color} 
modelo ${modelo}`);
//En esta practica concatenamos diferentes oraciones, la concatenacion por comillas invertidas es mas limpio y mas facil de entender

