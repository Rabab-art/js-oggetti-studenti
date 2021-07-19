// // ES 1
// // Creare un oggetto che descriva uno studente, con le seguenti proprietà: 
// nome, cognome e età.
// // Stampare a schermo (in pagina) attraverso un ciclo for-
// in tutte le proprietà dell'oggetto.

// var studente = {
//     "altezza": 1.90,
//     "colore-occhi": ['verde', 'grigio'],
//     fisico: 'sportivo',
//     capelli: 'ricci'
// };




// for (var key in studente) {
//     console.log(studente[key]);
// };

// for (i = 0; i < studente.lenght; i++) {
//     document.getElementById("demo");

// };


// // ES 2
// // Creare un array di oggetti di studenti.
// // Ciclare su tutti gli studenti e stampare per ognuno di essi,
//  nome e cognome.
// // Dare la possibilità all’utente, attraverso 3 prompt(),
//  di aggiungere un nuovo oggetto studente inserendo nell’ordine:
// nome, cognome e età.


var studenti = [
    studente1 = {

        nome: 'billi',
        cognome: 'bruno',
        age: 18,


    },
    studente2 = {

        nome: 'alex',
        cognome: 'pina',
        age: 23,

    },
];

var utente3 = {
    nome: prompt('Inserisci il nome'),
    cognome: prompt('Inserisci il cognome'),
    eta: prompt("Inserisci l'età"),

};

console.log(studenti[0][0]);
console.log(studenti[1][0]);
console.log(utente3);