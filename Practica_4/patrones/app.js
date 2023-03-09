let persona = {
    nombre: "Miguel",
    apellido: "Cortes",

    getName: function (){ //La funcion nos ayuda a completarar directamente una oracion gracias a las concatenaciones y las llamadas de las varables key
        return `${this.nombre} ${this.apellido}`
    },

    domicilio: {
        calle: "Albañiles #573",
        colonia: "El Porvenir",
        cp: 28000,
        municipio: "Colima",

        getDomicilio: function(){ //Aqui se debe tener cuidado donde se va a escribir el codigo ya que se encuentra dentro de la "capa" persona y dentro de la "capa" domicilio, es como ir escarbando en codigo
            return `${this.calle} colonia: ${this.colonia} CP: ${this.cp}, ${this.municipio}`
        }
    },

}

console.log(persona.getName());// a la hora de llamar aqui solo entramos a la "capa" persona, el cual nos permite imprimir el getName
console.log(persona.domicilio.getDomicilio());// A diferencia de nuestro console.log anterior, este debemos poner la "capa" persona y dentro de esa entrar a "domicilio", ya que si lo corremos sin entrar a domicilio no encontrara el codigo deceado.