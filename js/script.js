/*
**Consegna** Griglia Campo Minato
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

const btnPlay = document.getElementById('mb_play_btn');
const container = document.querySelector('.mb_second_container');
// let numberList = [];


btnPlay.addEventListener('click', function(){

  container.innerHTML = '';
  numberList = [];
  const difficulty = document.getElementById('difficulty_choice').value;

  if(difficulty === 'easy'){
    init(49)
  }else if(difficulty === 'medium'){
    init(81)
  }else if(difficulty === 'crazy'){
    init(100)
  }

});


/**
 * Inizializza i quadratini
 * @param {} 
 */
  function init(num) {
    for(let i = 1; i <= num; i++){
      const square = createSquare(container, num);
      // getUniqueRandomNumber(num)
      // console.log(numberList.sort());
      square.innerHTML = `<span>${i}</span>`;
      square.addEventListener('click', function(){
        this.classList.add('clicked');
      })
    }
  }
//


/**
 * Crea quadratini nell'HTML
 * @param {HTMlDivElement} target 
 * @returns
 */
  function createSquare(htmlElement, num) {
    const square = document.createElement('div');
    square.className = 'mb_square';
    // const number = getRandomNumber(1, num);
    // square.innerHTML = `<span>${number}</span>`;
    if(num === 49){
      square.classList.add('square49');
    }else if(num === 81){
      square.classList.add('square81');
    }else if(num === 100){
      square.classList.add('square100');
    }
    htmlElement.append(square);
    return square;
  }
//


/**
   * Generare numeri random
   * @param {number} min 
   * @param {number} max 
   * @returns 
   */
  // function getRandomNumber(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
//


/**
 * Generare numeri random unici
 * @returns 
 */
  // function getUniqueRandomNumber(num) {
  //   let number;
  //   let valid = false;
    
  //   while(!valid){
  //     number = getRandomNumber(1, num);

  //     if(!numberList.includes(number)){
  //       valid = true;
  //       numberList.push(number);
  //     }
  //   }

  //   return number;
  // }
//