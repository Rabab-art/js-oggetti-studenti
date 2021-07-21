// // ES 1
// // Creare un oggetto che descriva uno studente, con le seguenti proprietà: 
// nome, cognome e età.
// // Stampare a schermo (in pagina) attraverso un ciclo for-
// in tutte le proprietà dell'oggetto.

// var studente = {

//     nome: 'Luca',
//     cognome: 'Pina',
//     age: 29,
// };

// var utente = '';

// for (var key in studente) {
//     console.log(studente[key]);
//     utente += key + '=' + studente[key] + ', ';
// };

// document.getElementById('demo').innerHTML = utente;




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
        firstName: 'Michela',
        cognome: 'Lori',
        age: 19,
    },



];

var doc = stampaList(studenti);

document.getElementById('demo').innerHTML = doc;


var nome = prompt('Inserisci numero studente ');
var firstName = prompt('Inserisci il cognome');
var cognome = prompt('Inserisci il conogme');
var age = parseInt(prompt('Inserisci gli anni'));



var newstudente = {

    nome: nome,
    firstName: firstName,
    cognome: cognome,
    age: age,
};

studenti.push(newstudente);
var testo = stampaList(studenti);




document.getElementById('dopo').innerHTML = testo;




function stampaList(studenti) {
    var utente = '';

    for (var i = 0; i < studenti.length; i++) {
        var studente = studenti[i];
        utente += '<ul>';
        for (var key in studente) {
            console.log(studente[key]);
            if (key == 'firstName' || key == 'cognome') {

                utente += '<li>' + key + '=' + studente[key] + '</li>';
            }
        };
        utente = utente + '</ul>';

    }
    // utente += '</ul>';
    return utente;
}
