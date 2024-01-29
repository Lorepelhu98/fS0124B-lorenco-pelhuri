/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* In JavaScript abbiamo i datatype e possiamo trovarne diversi come: 
let stringa = ' testo ' ci possiamo mettere sia le virgolette "" o ''; e solitamente dentro la stringa troviamo un testo,documento o una seguenza di caratteri.

let numero = 2; dove ci vanno i numeri ma senza virgolette. 

let booleano = true o false che sono due valori, anche loro senza virgolette. 

let array = [] è una lista di valori.

let oggetti = {} è una lista di chiave-valore all'interno delle parentesi.  */ 

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

  let nome = 'Lorenco'; 
  console.log(nome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

  let primo = 12;
  
  let secondo = 20;

  let terzo = primo + secondo;

  console.log(terzo);




/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

  let x = 12;
  console.log(x)


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


  nome = 'Pelhuri';
  console.log(nome);


/* Con la variabile const non sarebbe stato possibile perchè stai cercando di riassegnare un valore
a una variabile costante e quindi genera un errore.
  const  nome = Pelhuri;
  nome = Pelhuri;  */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

  x = 12;

  let risultato = 4 - 12;

  console.log(risultato);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

  let name1 = 'john';

  let name2 = 'John';

  console.log( name1 == name2 );

  let = name1.toLowerCase() === name2.toLowerCase();
