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

// todo 1 - fare selezionare il livello di difficoltà all'utente
  // - al click collegare inputhtml a js con var
// todo 2 - generare la griglia di gioco al CLICK del btn
  // - al click su btn generare la griglia
// todo 3 - generare X bombe con numero random UNICO
// todo 4 - al CLICK della cella
  // * confrontare il NUMERO CELLA se presente nella LISTA NUMERO BOMBE
      // SE è una bomba si colora di rosso e finisce il gioco
      // SE è SAFE si colora di XXX e il gioco prosegue
// todo 5 - fine gioco
  // * SE vince deve comunicare il numero dei click
  // * SE perde deve comunicare il numero di click sul totale disponibile meno le bombe

// ! DATI GLOBALI
const btnPlay = document.querySelector('#play'); // collego btn play HTML ad variabile
const btnReset = document.querySelector('#reset'); // collego btn reset HTML ad variabile
const container = document.querySelector('.container'); // collego container HTML ad variabile
const inputGame = document.querySelector('.container-2') // collego container2 (la mia griglia) HTML ad variabile
const elementForRow = document.querySelector('select'); // prendo l'indice dalla select
const levelArray = [10, 9, 7, 5];
const nExponent = 2; // numero esponente
const numBomb = 16;

// ! INIZIO GAME
btnPlay.addEventListener('click', play);

function play(){
  const nCelle = Math.pow(levelArray[elementForRow.value], nExponent);
  btnPlay.removeEventListener('click', play)

  container.classList.add('bgc-green',);
    
  // richiamo la funzione che genera i quadrati e gli do i parametri
  generateSquare(nCelle);
}





// ! TASTO RESET
btnReset.addEventListener('click', function(){

  btnPlay.addEventListener('click', play);
  container.innerHTML = '';
  container.classList.remove('bgc-green')

})







// ! ⏬⏬⏬⏬⏬⏬⏬ FUNZIONI ⏬⏬⏬⏬⏬⏬⏬

// creo una funzione che genera il ciclo per generare e stampare in pagina i quadrati
function generateSquare(nSquare) {
// qui genero fisicamente i quadrati
  for(let i = 0; i < nSquare; i++){
    // creo elemento div e assegno classe
    let square = document.createElement('div');
    square.classList.add('square')
    // creo proprietà custom
    const squareNum = i + 1;
    square.idSquare = squareNum;
    square.style.width = `calc(100% / ${levelArray[elementForRow.value]})`;
    square.style.height = `calc(100% / ${levelArray[elementForRow.value]})`;
    square.innerHTML = square.idSquare;
    container.append(square);
    console.log(this.idSquare);
  }
  }

  function randomNumber(min, max){
    return randomNum = Math.floor(Math.random() * (min - max + 1)) + min;
  }