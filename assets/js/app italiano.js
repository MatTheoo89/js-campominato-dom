console.log('link collegato ok');

/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:

con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

I numeri nella lista delle bombe non possono essere duplicati.

In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

**BONUS:**
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle

****2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
*/

// ? COSA DEVO FARE

// range => le mie difficoltà
// numDiBombe => 16
// listaNumeriBomba = []
// punteggio;
// msgFinale;


// Seleziono la difficoltà
// stampo la griglia in pagina
// dentro a ogni quadrato stampo il suo numero
// genero dei numeri unici per le bombe nel range selezionato
// le unisco in una lista

// clicco su una cella
// confronto il numero se è presente nella lista bombe
// se è presente si colora di rosso il quadrato ed il gioco finisce e mi mostra un msg gameover e tutte le bombe


//se non è presente nella lista delle bombe il quadrato si colora di verde e aumento il punteggio

// il gioco finisce se trovo la bomba e se il punteggio è uguale al range selezionato meno il numero delle bombe