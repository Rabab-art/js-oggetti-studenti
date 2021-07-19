// // ES 1
// // Creare un oggetto che descriva uno studente, con le seguenti proprietà: 
// nome, cognome e età.
// // Stampare a schermo (in pagina) attraverso un ciclo for-
// in tutte le proprietà dell'oggetto.

var studente = {
    "altezza": 1.90,
    "colore-occhi": ['verde', 'grigio'],
    fisico: 'sportivo',
    capelli: 'ricci'

};

for (var key in studente) {
    console.log(studente[key]);

};

studente = document.getElementById('demo').innerHTML;
