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
const pets = ['dog', 'cat', 'hamster', 'redfish'];
for (let i = 0; i < pets.length; i++){
  console.log(pets[i]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();

console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const copiePets = [...pets];

const reversedPets = copiePets.reverse();

console.log(reversedPets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const primoPets = pets.shift();

pets.push(primoPets);

console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
const licensePlateValue = 'LCP989PH';   
for (let i = 0; i < cars.length; i++){
    cars[i].licensePlateValue = licensePlateValue;
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar ={
  brand: 'Mercedes',
  model: 'Classe C',
  color: 'lime',
  trims: ['AMG', 'turbo benzina'],
}
cars.push(newCar);


for (let i = 0; i < cars.length; i++){
  const car = cars[i];
  car.trims.pop();
}
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const car = [
  {trims: ['titanium']},
  {trims: ['allure']},
  {trims: ['life']},
  {trims: ['AMG']}
];

const justTrims = [];

for (let car of cars){
  justTrims.push(car.trims[0]);
}
console.log(justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
const cars1 = [
{color: "red", model: "Fiesta"},
  {color: "blue", model: "208"},
  {color: "black", model: 'Polo'},
  {color: "lime", model: "Classe C"}
];
cars.forEach(car =>{
  if (car.color.startsWith("b")){
    console.log("Fizz");
  }else{
    console.log("Buzz");
  }
});
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;
let value = numericArray[i];

while (value !== 32){
  console.log(value);
  i++;
  value = numericArray[i];
}
console.log(value);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const ordineArray = [];

for(let caratteri of charactersArray){
  switch (caratteri){
    case 'a':
      ordineArray.push(1);
      break;
    case 'b':
      ordineArray.push(2);
      break;
    case 'c':
      ordineArray.push(3);
      break;
    case 'd':
      ordineArray.push(4);
      break;
    case 'e':
      ordineArray.push(5);
      break;
    case 'f':
      ordineArray.push(6);
      break;
    case 'g':
      ordineArray.push(7);
      break;
    case 'h':
      ordineArray.push(8);
      break;
    case 'i':
      ordineArray.push(9);
      break;
    case 'j':
      ordineArray.push(10);
      break;
    case 'k':
      ordineArray.push(11);
      break;
    case 'l':
      ordineArray.push(12);
      break;
    case 'm':
      ordineArray.push(13);
      break;
    case 'n':
      ordineArray.push(14);
      break;
    case 'o':
      ordineArray.push(15);
      break;
    case 'p':
      ordineArray.push(16);
      break;
    case 'q':
      ordineArray.push(17);
      break;
    case 'r':
      ordineArray.push(18);
      break;
    case 's':
      ordineArray.push(19);
      break;
    case 't':
      ordineArray.push(20);
      break;
    case 'u':
      ordineArray.push(21);
      break;
    case 'v':
      ordineArray.push(22);
      break;
    case 'w':
      ordineArray.push(23);
      break;
    case 'x':
      ordineArray.push(24);
      break;
    case 'y':
      ordineArray.push(25);
      break;
    case 'z':
      ordineArray.push(26);
      break;
    
      default:

      break;
  }
}
console.log(ordineArray);
