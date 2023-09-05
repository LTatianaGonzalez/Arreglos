
document.write('<h1 style=""> Números al azar</h1>')


let arr = [];


for (let index = 0; index < 10; index++) {
     
  var x = Math.round(Math.random()*10);
  arr.push(x);
    
}
document.write(arr)
    console.log(arr)

    document.write('<h1 style=""> Separar palabras \n </h1>')
let palabras = "";
palabras = prompt("ingrese los elementos a guardar separados por una coma ',' ");

//let contenedor = [];

var contenedor = palabras.split(',');


for (let sum = 0; sum < contenedor.length; sum++) {
    console.log(contenedor[sum])
    document.write("elemento "+sum+" "+contenedor[sum] + " \n ");
}


document.write('<h1 style=""> Ordenar numeros \n </h1>')

const  ordenar =  [10,40,30,20,15,5];

function comparar(a, b) {
  return a - b;
}
console.log(ordenar.sort(comparar)); 
document.write(ordenar.sort(comparar));

