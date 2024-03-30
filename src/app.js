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
sports: ["fútbol"," hockey"," rugby"],
eyeColor:"brown",
hobbies:["read", " play guitar", " ceramics"]
};

let person2 = {
name:"Jimmy",
age: 55,
height:185,
sports: ["basketball"," handball"," climbing"," running"],
eyeColor: "green",
hobbies:["travel"," feed the pigeons"]
};

let person3 = {
name:"Jeffry",
age: 19,
height:190,
sports: ["chess"," darts"],
eyeColor:"blind",
hobbies: ["listen music"," play piano","  audiobooks", ]
};

let person4 = {
name:"Joey",
age: 43,
height: 160,
sports: ["paddle"," tennis"," ping-pong"],
eyeColor:"blue",
hobbies:["watch contact-sports", " listen war conferences"]
};


let family = [person1, person2, person3, person4, ];
let text = ' '
family.map((item) => {
  // text += '<h2 class="text-danger">' + item.name + ' ' + item.age + ', ' + item.eyeColor + '</h2>' 
  text += `<h2 class="text-danger">${item.name}, ${item.age}: ${item.eyeColor}</h2>`         //template literal
  text += '<ul class="list-group">'
  item.sports.map((element) => {
  // text += '<li class="list-group-item">' + element + '</li>'
  text += `<li class="list-group-item">${element}</li>`   //template literal
  })
text += '</ul>'
})

document.querySelector('#list').innerHTML = text



let myText = ' '
family.map((item,id) =>  { 
myText += `<div class="card border-success m-1" style="max-width: 18rem;">
  <div class="card-header bg-warning border-success">${item.name}, ${item.age}</div>
  <div class="card-body bg-black">
   <img src = "https://static.nationalgeographic.es/files/styles/image_3200/public/109.600x450.jpg?w=1190&h=893" style="width:100%; height:auto;">
  </div>
  <div class="card-footer bg-light border-success">${item.hobbies}</div>
</div>`
})
document.querySelector('#cards').innerHTML = myText

const rockStars = 
[
  {
    "id": 1,
    "picture" : "https://definicion.de/wp-content/uploads/2011/07/simio-1.jpg",
    "status": true,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "picture" : "https://s2.abcstatics.com/Media/201206/13/Pan_paniscus_Ulindi_M_Seres--644x560.jpg",
    "status": true,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "picture" : "https://img.europapress.es/fotoweb/fotonoticia_20170511123013_690.jpg",
    "status": false,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "picture" : "https://d2yoo3qu6vrk5d.cloudfront.net/images/20170912135959/mico-selfi-900x485.jpg?itok=1505242998",
    "status": true,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "picture" : "https://s3.ppllstatics.com/diariovasco/www/pre2017/multimedia/RC/201108/11/Media/andy-serkis-cesar--647x300.JPG",
    "status": false,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "picture" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbF2_Ho1ibLgBvEBpj-DInfo4pLAG-h1HIg&usqp=CAU",
    "status": false,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "picture" : "https://ak.uecdn.es/p/108/thumbnail/entry_id/0_f6052ln3/width/660/cache_st/1702929619/type/2/bgcolor/000000/0_f6052ln3.jpg",
    "status": true,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "picture" : "https://aquimediosdecomunicacion.com/wp-content/uploads/2021/04/curiosidades-orangutan-abril-2021.jpg",
    "status": false,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "picture" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvlhaKErCEuf39XwQcc0XOKJDbWPpBml_hg&usqp=CAU",
    "status": true,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "picture" : "https://significado.com/wp-content/uploads/2015/04/Simio.jpg",
    "status": false,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]

let textrock = '<ul  class="list-group">'
rockStars.map((item, id) => {
  textrock += `
  <div class = "alert alert-${item.status ? 'success': 'danger'} ">
    <li key=${id} class="list-group-item d-flex justify-content-between">
      <div>${item.name}</div>
      <div>

      // Sería aquí. Si meto los span en el ternario (uno en lugar de active y otro en lugar de retired) sale el error
      
        ${item.status ? 'active': 'retired'} 
        <span class="mx-1"><i class="far fa-edit"></i></span>
        <span class="mx-1"><i class="fas fa-trash-alt text-danger"></i></span>

      </div>
    </li>
  </div>`
})
document.querySelector('#rockers').innerHTML = textrock
textrock += '</ul>'

 let anotherText = ' '
rockStars.map((item, id) => {
  anotherText  += `
  <div key=${id} class="card" style="width: 18rem;">
    <img src= ${item.picture} class="card-img-top width="100%" height="200"" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.address.city}, ${item.address.zipcode}</p>
        <a href="#" class="btn btn-primary">${item.email}</a>
      </div>
  </div>
  `
})
document.querySelector('#rockyroll').innerHTML = anotherText
console.log(textrock) 
};

