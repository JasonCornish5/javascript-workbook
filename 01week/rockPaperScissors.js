'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  let p1 = hand1.trim().toLowerCase();
  let p2 = hand2.trim().toLowerCase();

  if (p1 === 'rock') {
    if (p2 === 'paper') {
      let winMsg = 'Hand two wins!';
      return winMsg;
    } else if (p2 === 'scissors') {
      let winMsg = 'Hand one wins!';
      return winMsg;
    } else if (p2 === 'rock'){
      let winMsg = "It's a tie!";
      return winMsg;
    }


  } else if (p1 === 'paper') {
    if (p2 === 'scissors') {
      let winMsg = 'Hand two wins!';
      return winMsg;
    } else if (p2 === 'rock') {
      let winMsg = 'Hand one wins!';
      return winMsg;
    } else if (p2 === 'paper') {
      let winMsg = "It's a tie!";
      return winMsg;
    }


  } else if (p1 === 'scissors') {
    if (p2 === 'rock') {
      let winMsg = "Hand two wins!";
      return winMsg;
    } else if (p2 === 'paper') {
      let winMsg = "Hand one wins!";
      return winMsg;
    } else if (p2 === 'scissors') {
      let winMsg = "It's a tie!";
      return winMsg;
    }
  }


}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
