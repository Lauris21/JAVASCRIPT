//! --------------- FOR ---------------------

// for (inicialización, condición, actualización)

for (let i = 0; i <= 10; i++) {
  console.log(`Me encuentro en la posición ${i}`);
}

// recorrer un array

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

let family = [
  {
    type: "madre",
    name: "Lola",
    adress: [28008, "Madrid"],
  },
  {
    type: "padre",
    name: "Miguel",
    adress: ["Madrid"],
  },
  {
    type: "hijo",
    name: "David",
    adress: ["Madrid"],
  },
];
console.log("---------------------------------");
console.log(family[0].adress);

// for (let i = 0; i < family.length; i++) {
//   console.log(family[i]);
// }

//Bucle anidado para recorrer la key adress
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].adress.length; j++) {
    console.log(
      `El miembro de la familia llamado ${family[i].name} vive en ${family[i].adress[j]}`
    );
  }
}

//Sacar a la persona que vive en el C.P 28008

// for (let z = 0; z < family.length; z++) {
//   for (let i = 0; i < family[z].adress.length; i++) {
//     family[z].adress[i] == 28008 &&
//       console.log(
//         `La persona llamada ${family[z].name} vive en ${family[z].adress[i]}`
//       );
//   }
// }

console.log("----------------------------");

for (let z = 0; z < family.length; z++) {
  for (let i = 0; i < family[z].adress.length; i++) {
    if (family[z].adress[i] == 28008)
      console.log(
        `La persona llamada ${family[z].name} vive en ${family[z].adress[i]}`
      );
  }
}

//!--------------------------FORAECH--------------------------

const paises = ["Portugal", "España", "Francia", "Italia", "Alemania"];

//Arroy
paises.forEach((name, index) =>
  console.log(`El pais ${name} tiene el index ${index}`)
);

//Function
paises.forEach(function (pais, i) {
  console.log(pais);
});

console.log("--------------------------------");

//!----------------FOR OF--------------------

//Para elementos iterables: string, set, arguments, araray

const movies = [
  {
    name: "Titanic",
    date: 1997,
  },
  {
    name: "Sirenita",
    date: 2023,
  },
  {
    name: "Star Wars",
    date: 2001,
  },
];

for (const movie of movies) {
  console.log(movie.name);
}

//!-------------------------FOR IN----------------------------

//Sirve para los objetos {} nos da la clave

const heroes = [
  {
    name: "Spiderman",
    age: 28,
  },
  {
    name: "Batman",
    age: 57,
  },
  {
    name: "Iron Man",
    age: 49,
  },
];

console.log("------------------------------");

for (let heroe of heroes) {
  for (const key in heroe) {
    let nameToConsole = key == "age" && heroe[key];
    // if (nameToConsole) {
    //   console.log(`Este super heroe tiene la edad de: ${nameToConsole}`);
    // }

    nameToConsole &&
      console.log(`Este super heroe tiene la edad de: ${nameToConsole}`);
  }
}
