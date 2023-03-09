function Greetr(){ // Crear una función constructora para crear un objeto con una propiedad y una funcion
    this.greeting = 'Hello greet3';
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr;// Se exporta el objeto creado con la funcion constructora