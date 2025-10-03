/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("Esercizio 1");
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("Esercizio 2");
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("Esercizio 3");
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Esercizio 4");
const temp = pets.slice(0, 1);
console.log(temp);
pets.splice(0, 1);
console.log(pets);
pets.push(temp[0]);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("Esercizio 5");
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "AB000CD";
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("Esercizio 6");
const newCar = {
  brand: "FIAT",
  model: "Panda",
  licensePlate: "GG000WP",
  color: "red",
  trims: ["hybrid", "benzina", "diesel"],
};
console.log(newCar);
cars.push(newCar);
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log("Array Cars dopo rimosso ultimo Trim", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("Esercizio 7");
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims.slice(0, 1));
  console.log(justTrims);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("Esercizio 8");
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("Esercizio 9");
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let i = 0;
while (i < numericArray.length) {
  console.log(numericArray[i]);
  if (numericArray[i] !== 32) {
    i++;
  } else {
    console.log(
      "mi sono fermato perché ho raggiunto il valore 32 all interno dell Array"
    );
    break;
  }
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
// console.log("Esercizio 10");
// const charactersArray = ["g", "n", "u", "z", "d"];
// for (let i = 0; i < charactersArray.length; i++) {
//   switch (
//     charactersArray[i] //a=1,b=2,c=3,d=4,e=5,f=6,g=7,h=8,i=9,l=10,m=11,n=12,o=13,p=14,q=15,r=16,s=17,t=18,u=19,v=20,z=21
//   ) {
//     case "d":
//       charactersArray[i] = 4;
//       break;
//     //il codice sarebbe lo stesso semplicemente evito di scrivere 21 casi e scrivo solo quelli dati ;)
//     case "g":
//       charactersArray[i] = 7;
//       break;
//     case "n":
//       charactersArray[i] = 12;
//       break;
//     case "u":
//       charactersArray[i] = 19;
//       break;
//     case "z":
//       charactersArray[i] = 21;
//       break;
//   }
// }
// console.log(charactersArray);// mi aspetto che la sostituzione in loco dell Array venga fuori con l Array = [7,12,19,21,4]
// in caso la consegna fosse di creare un altro array parallelo con Spread Operator e poi sostituirlo allora:
console.log("variante Esercizio 10");
const charactersArray = ["g", "n", "u", "z", "d"];
const nuovoArray = [...charactersArray];
for (let i = 0; i < charactersArray.length; i++) {
  switch (
    charactersArray[i] //a=1,b=2,c=3,d=4,e=5,f=6,g=7,h=8,i=9,l=10,m=11,n=12,o=13,p=14,q=15,r=16,s=17,t=18,u=19,v=20,z=21
  ) {
    case "d":
      nuovoArray[i] = 4;
      break;
    //il codice sarebbe lo stesso semplicemente evito di scrivere 21 casi e scrivo solo quelli dati ;)
    case "g":
      nuovoArray[i] = 7;
      break;
    case "n":
      nuovoArray[i] = 12;
      break;
    case "u":
      nuovoArray[i] = 19;
      break;
    case "z":
      nuovoArray[i] = 21;
      break;
  }
}
console.log(charactersArray); //["g", "n", "u", "z", "d"]
console.log(nuovoArray); // nuovoArray = [7,12,19,21,4]
