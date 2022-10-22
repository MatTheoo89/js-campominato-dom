console.log('link collegato ok');


const btnPlay = document.querySelector('#play');
const btnReset = document.querySelector('#reset');
const container = document.querySelector('.container');
const levelSelect = document.querySelector('select');
const levelTarget = [10, 9, 7, 5];
const nExponent = 2;
const numBomb = 16;
let bombsCreate = [];
let score = 0;







// ! START GAME
btnPlay.addEventListener('click', play);




// ! TASTO RESET
btnReset.addEventListener('click', function(){
  
  btnPlay.addEventListener('click', play);
  container.innerHTML = '';
  container.classList.remove('bgc-green')
  levelSelect.value = 0;
  document.querySelector('.end-game').innerHTML = '';
})


function play(){
  let totalSquare = Math.pow(levelTarget[levelSelect.value], nExponent);
  
  btnPlay.removeEventListener('click', play)
  
  container.classList.add('bgc-green');
  
  generateSquare(totalSquare);
  
  createBombs(totalSquare);
  
}



function squareClickCell(){
    
  if(!bombsCreate.includes(this.idSquare)){
    
    this.classList.add('bgc-safe'); 
    
    score++;

    const cells = document.getElementsByClassName('square');

    if(score === cells.length - numBomb){

      endGame(true);
    }
  }else{
    endGame(false);
  }
}

function endGame(isWin){
  let msg;
  const cells = document.getElementsByClassName('square');

  if(isWin){
    msg = `Congratulazioni! Hai vinto!`;
  }else{
    msg = `Game over. il tuo punteggio è: ${score} su ${(cells.length - numBomb)}`;
  }


  document.querySelector('.end-game').innerHTML = msg;

  showBombs();

    const gameOver = document.createElement('div');
    gameOver.classList.add('block-click');
    document.querySelector('.container.bgc-green').append(gameOver);
  }


  function showBombs() {
    const cells = document.getElementsByClassName('square');
  
    for(let i = 0; i < cells.length; i++){
  
      const cell = cells[i];
  
      // se i è in array bombe agggiungo classe 
      if(bombsCreate.includes(cell.idSquare)){
        cell.classList.add('bgc-bomb');
      }
    }
  }











function generateSquare(nSquare) {
    for(let i = 0; i < nSquare; i++){
      let square = document.createElement('div');
      square.classList.add('square')
      const squareNum = i + 1;
      square.idSquare = squareNum;
      square.style.width = `calc(100% / ${levelTarget[levelSelect.value]})`;
      square.style.height = `calc(100% / ${levelTarget[levelSelect.value]})`;
      square.innerHTML = square.idSquare;
      container.append(square);

      square.addEventListener('click', squareClickCell);

    }
    }

function createBombs (totalSquare){
  let bombs = [];

  while (bombs.length < numBomb) {
    let numberOfBomb = randomNumber (1, totalSquare)

  if (!bombs.includes(numberOfBomb)){
    bombs.push(numberOfBomb);
  }
}
  bombsCreate = bombs;
    }

function randomNumber (min, max){
  let numGenerate = Math.floor(Math.random() * (max - min + 1)) + min;
  return numGenerate;
}
