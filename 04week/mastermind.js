'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let redHint = [0];
let blueHint = [0];
let hint = [];
let hintCopy = [];
let letterChecker = [0, 0, 0, 0];


function generateHint(guess) {
  let solutionArr = solution.split('');

  let guessArr = guess.split('');
  let guessCopy = guessArr.slice(0);

  for (var i = 0; i < guessArr.length; i++) {
    for (var a = 0; a < solutionArr.length; a++) {

      if (guessArr[i] === solutionArr[a]) {
        for (var j = 0; j < guessArr.length; j++) {
          for (var b = 0; b < guessCopy.length; b++) {
            var c = b + 1;
            if (arr[j] == arr[b] && arr[j] == arr[c]) {
              letterChecker[j] = + 1;
            }
          }
        }
        if (i == a) {
          if (letterChecker[i] == 0) {
            redHint[0]++;
          } else if (letterChecker[i] == 1) {
            
          }
          
        }

        if (i !== a) {
          blueHint[0]++
        }
      }
    }
  }
  hint[0] = redHint[0];
  hint[1] = blueHint[0];
  redHint = [0];
  blueHint = [0];
  hintCopy[0] = hint[0];
  hintCopy[1] = hint[1];
  hint = [];
  return hintCopy;
}

//transform guess into an array and split up by letters. Check for uppercase and only letters between a and h. run a for loop on
//the split guess array then run another loop inside of that one checking if guess letters equal solution letters. Create
//an if statement checking if the value of i equals the value of a
//of that if statement run another checking if 

function mastermind(guess) {
   solution = 'abcd';

  generateHint(guess)
  console.log(hintCopy[0] + '-' + hintCopy[1]);

  if (solution == guess) {
    console.log('You guessed it!');
  }
  
  
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
