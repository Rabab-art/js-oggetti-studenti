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
    {
        nome: 'studente 1',
        firstName: 'Luca',
        cognome: 'Pina',
        age: 24,
    },
    {

        nome: 'studente 2',
        firstName: 'Fabio',
        cognome: 'Molteni',
        age: 20,
    },
    {
        nome: 'studente 3',
        nome_studente: 'Michela',
        cognome: 'Lori',
        age: 19,
    },



];

// // document.getElementById("demo").innerHTML = studenti[0] + "" + studenti.length;
// document.getElementById("demo").innerHTML = studenti.nome_studente;
document.getElementById("demo").innerHTML = studenti.firstName;


var oggetto_studente = [
    {
        nome: prompt('Inserisci il nome'),
        cognome: prompt('Inserisci il cognome'),
        eta: parseInt(prompt("Inserisci l'età")),

    },
];

console.log(studenti[0].firstName);
console.log(studenti[0].cognome);
console.log(studenti[1].firstName);
console.log(studenti[1].cognome);
console.log(studenti[2].nome_studente);
console.log(studenti[2].cognome);
console.log(oggetto_studente[0].nome);
console.log(oggetto_studente[0].cognome);
