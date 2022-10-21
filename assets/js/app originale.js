console.log('link collegato ok');

/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/*
// todo 1 - Struttura fissa HTML/CSS
todo 2 - creare la griglia dinamicamente
todo 3 - numerare quadratti
todo 4 - Output
*/


/*
! 1 - creare griglia dinamicamente
  ? COSA DEVI FARE per generare la griglia?

  Quando premi sul PULSANTE vengono generati tanti quadrati, quanto il NUMERO moltiplicato per il NUMERO.

  Ogni quadrato generato viene STAMPATO in pagina APPESO al CONTAINER

  su ogni quadrato generato al suo interno dovrà avere il suo numero in ordine progressivo

*/


// DATI PARTENZA
const buttonPlay = document.querySelector('button'); // collego btn HTML ad variabile
const btnReset = document.querySelector('#reset')
const container = document.querySelector('.container'); // collego container HTML ad variabile
const inputGame = document.querySelector('.container-2')
const elementForRow = document.querySelector('select'); // poi prenderà il dato dalla select
const nExponent = 2; // numero esponente
//console.log(buttonPlay, elementForRow, nExponent);


// metto in ascolto il button per essere premuto
buttonPlay.addEventListener('click', function(){
  //console.log('cliccato');
  container.classList.add('bgc-green',);
  inputGame.classList.add('hide');
  btnReset.classList.remove('hide');
  
  // richiamo la funzione che genera i quadrati e gli do i parametri
  generateSquare(elementForRow.value, nExponent);

})

btnReset.addEventListener('click', function(){
  window.location.reload()
})














// ! ⏬⏬⏬⏬⏬⏬⏬ FUNZIONI ⏬⏬⏬⏬⏬⏬⏬

// creo una funzione che genera il ciclo per generare e stampare in pagina i quadrati
function generateSquare(elRow, exp) {
  
  // qui risalgo al numero di quanti ne devo stampare in pagina
  let nSquare = Math.pow(elRow, exp)
  //console.log('nSquare', nSquare);

// qui genero fisicamente i quadrati
  for(let i = 0; i < nSquare; i++){
    //console.log(i + 1);
    
    // creo elemento div
    let square = document.createElement('div');
    
    // ci aggiungo la classe css
    square.classList.add('square')
    console.log(square);

    // creo proprietà custom
    const squareNum = i + 1;
    //console.log('squareNum-->', squareNum);
    square.idSquare = squareNum;
    square.style.width = `calc(100% / ${elementForRow.value})`;
    square.style.height = `calc(100% / ${elementForRow.value})`;
    square.addEventListener('click', function(){
      this.innerHTML = this.idSquare;
      square.classList.add('bgc-yellow');
      console.log(this.idSquare);
    })

    // ci scrivo dentro il numero
    //square.innerText = i + 1;
    
    // appendo al contenitore fuori da ciclo
    container.append(square);
  }
  }