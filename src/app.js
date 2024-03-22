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
}

let person2 = {
name:"Jimmy",
age: 55,
height:185,
sports: ["basketball","handball","climbing","running"],
eyeColor: "green",
hobbies:["travel","feed the pigeons"]
}

let person3 = {
name:"Jeffry",
age: 19,
height:190,
sports: ["chess","darts"],
eyeColor:"blind",
hobbies: ["listen music","play piano","audiobooks","sing"]
}

let person4 = {
name:"Joey",
age: 43,
height: 160,
sports: ["paddle","tennis","ping-oong"],
eyeColor:"blue",
hobbies:["watch contact-sports", "listen war conferences"]
}

let family = [person1, person2, person3, person4]



family.map((item)  =>  {console.log(item[4].sports[1])})
 
};
