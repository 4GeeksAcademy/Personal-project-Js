/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here


let person1 = {
name:"Joe",
age: 39,
height: 170,
sports: ["fútbol","hockey","rugby"],
eyeColor:"brown",
hobbies:["read", "play guitar", "ceramics"]
};

let person2 = {
name:"Jimmy",
age: 55,
height:185,
sports: ["basketball","handball","climbing","running"],
eyeColor: "green",
hobbies:["travel","feed the pigeons"]
};

let person3 = {
name:"Jeffry",
age: 19,
height:190,
sports: ["chess","darts"],
eyeColor:"blind",
hobbies: ["listen music","play piano","audiobooks","sing"]
};

let person4 = {
name:"Joey",
age: 43,
height: 160,
sports: ["paddle","tennis","ping-pong"],
eyeColor:"blue",
hobbies:["watch contact-sports", "listen war conferences"]
};

// Ya tenemos creados los objetos con los que vamos a trabajar. Son objetos porque se introducen con la variable 
// let + el nombre + (entre llaves) los atributos y valores. Después de haberlos creado vamos a meterlos en otro 
// objeto para que los englobe a todos. Este será un "Array de objetos" ya que es un array (una lista) de los
// objetos que hemos creado anteriormente. 

let family = [person1, person2, person3, person4]

//Ahora vamos a intentar imprimir en la consola los parámetros que queramos, por ejemplo toda la lista entera (todos
// los objetos), o solo el nombre de las personas, o el nombre de las personas y su segundo deporte por ejemplo.

// console.log(family)   Va a imprimir "Array (4)" en la consola, ya que es un Array con 4 items. Para imprimir
                         // todo el contenido del array tenemos que usar la propiedad .map y crear una función que 
                         // recorra cada item de principio a fin y lo imprima en la consola.

// family.map((item) =>  Va a imprimir todo el array en la consola con todos los items correspondientes, es decir la
// console.log(item)     lista entera con todos los items ordenados del primero al último (map)

// family.map((item) => {   Va a imprimir los item que se llaman "name" en la consola, es decir el valor del atributo
// console.log(item.name)   name, el nombre de cada objeto del array que hemos llamado "family" (4 nombres).

//family.map((item) => {                    Va a imprmir por un lado el nombre (item.name) de cada objeto, y por otro
//  console.log(item.name, item.sports[1])  lado el segundo deporte de la lista de deportes (item.sports[1]) de cada objeto.

// Ahora vamos a hacer que en vez de imprimir el resultado en la consola lo represente directamente en la página
// en la que estamos trabajando (o el browser), es decir que vamos a tomar un elemento de html donde va a aparecer el texto
// que queramos incorporar. Lo primero es designar un #id en algún elemento del arvhivo HTML (que será
// donde queremos que aparezca el texto que vamos a meter). En este caso lo vamos a seleccionar en el párrafo de la alerta
// con el id #list. Después vamos a crear una constante tag con la propiedad document.querySelector, asignándole el id anterior
//  ya que es dónde va a aparecer el nuevo texto.

 const tag = document.querySelector("#list")

 // Para que la variable tag se realice, es decir para que se vea el resultado en la página, tenemos que agregarle a esa 
 // variable la propiedad innerHTML, y dentro de esta podemos elegir lo que queremos que se vea, ya sea un pequeño texto, 
 // la lista de los nombres y deportes de nuestro Array de objetos o unas cards con la información de cada objeto del Array.

tag.innerHTML = "Nuevo texto"  // En la página se vería el texto "Nuevo texto", se puede reemplazar por cualquier cosa.

// Una vez averiguado el camino vamos a reemplazar el Nuevo texto por una lista con los nombres de las personas y sus
// deportes, para que se vean directamente en la página (es el objetivo principal)
 
 

}