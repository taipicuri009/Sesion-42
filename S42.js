console.log("METODO MAP()");
//Dado el arreglo numbers, crear un nuevo arreglo square basado en el arreglo numbers pero al cuadrado, utilizando el metodo map()

var numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //Arreglo con los elementos
var square = numbers.map(x => x * x * x); //Utilización de map() para transformar cada uno de los elementos al cuadrado
console.log(square) //Lo utilizamos para mostrar el arreglo por consola

console.log("METODO REDUCE()")
//Dado el arreglo "array" crar un nuevo arreglo "reducer" basado en el arreglo original, que permita sumar todos los elementos del arreglo.
var array = [1, 2, 3, 4, 5]; //Arreglo con los elementos originales
var reducer = array.reduce(function(a,b){return a + b}); //Utilzacion de reduce para poder transformar el arreglo a un valor entero que representa la suma de todos los valores que contiene
console.log(reducer) //Lo utilizamos para mostrar el arreglo por consola

console.log("METODO SORT()")
//Ordenamiento Simple
console.log("Ordenamiento simple")
var array2 = [40, 1, 5, 200];
array2.sort();//[1, 200, 40, 5]
console.log(array2)
//Ordenamiento Complejo
console.log("Ordenamiento complejo")
array2.sort(function(a,b){return a - b}) //[1, 5, 40, 200]
console.log(array2)

console.log("METODO REVERSE()");
const array3 =['uno','dos','tres','cuatro','cinco'];
console.log("arreglo original ",array3);
const reversed = array3.reverse();
console.log("arreglo invertido",reversed);

console.log("METODO SPLIT()");
var micadena = "Hola mundo, como estas hoy?"
var división = micadena.split(" ",5);//mostramos 5 carteres "hola mundo como estas hoy?"
console.log(división);

console.log("METODO JOIN");
//Uniendo un arreglo cuatro veces en diferentes formas
//el siguiente ejemplo crea un arreglo de cuatro elementos para luego unir el arreglo cuatro veces
var array4 = ['agua' , 'aire' , 'tierra' , 'fuego'];
var join1 = array4.join(); //'agua,aire,tierra,fuego
console.log(join1)
var join2 = array4.join(', '); //agua, aire, tierra, fuego
console.log(join2)
var join3 = array4.join(' + '); //agua + aire + tierra + fuego
console.log(join3)
var join4 = array4.join(''); //aguaairetierrafuego
console.log(join4)
