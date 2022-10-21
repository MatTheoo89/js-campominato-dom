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
})


function play(){
  let totalSquare = Math.pow(levelTarget[levelSelect.value], nExponent);
  
  btnPlay.removeEventListener('click', play)
  
  container.classList.add('bgc-green');
  
  generateSquare(totalSquare);
  
  createBombs(totalSquare);
  
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