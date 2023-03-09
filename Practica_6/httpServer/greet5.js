let greeting = 'Hi greet 5';

let greet = () => { // Se crea una funcion greet para poder exportarla y usarla en app.js
    console.log(greeting);
}

let jump = () => { // Se crea una funcion jump para poder exportarla usando texto directamente dentro de la funcion
    console.log('Jai desde jump');
}

let suma = () => { // Se crea una funcion suma que nos permitira sumar dos numeros en este caso 1+1
    let x = 1;
    let y = 1;
    console.log(x+y);
}

let  date = () => { // Se crea una funcion date que nos permitira imprimir la fecha en formato dia de mes del año
    let dia = '3'
    let mes = 'Abri'
    let año = '2023' 
    console.log(`${dia} de ${mes} del ${año}`);
}



module.exports = {// Se exportan las funciones greet, jump, suma y date, con su respectivo nombre y comas para separarlas, ya que los nombres de las funciones  no son diferentes a los nombres de los objetos, obviamos la redundancia
    greet,
    jump,
    suma,
    date
}