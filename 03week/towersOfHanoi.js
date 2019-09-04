'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  
}

function checkForWin() {
  // Your code here

}

var startRow = 0;
var endRow = 0;

function towersOfHanoi(startStack, endStack, stacks) {
    if (startStack === 'a') {
      startRow = stacks.a;
    } else if (startStack === 'b') {
      startRow = stacks.b;
    } else if (startStack === 'c') {
      startRow = stacks.c;
    }

    if (endStack === 'a') {
      endRow = stacks.a;
    } else if (endStack === 'b') {
      endRow = stacks.b;
    } else if (endStack === 'c') {
      endRow = stacks.c;
    }

    // isLegal(startRow)
    
    var trueLengthI = startRow.length - 1;
    var trueLengthA = endRow.length - 1;

    for (var i = 0; i <= startRow.length; i++){

      if (i == trueLengthI) {
        var maxI = startRow[i];
        }
      }
     

    for (var a = 0; a <= endRow.length; a++) {
      if (a == trueLengthA) {
        var maxA = endRow[a];
      }
    }

    if (maxI > maxA) {
      console.log('Your end stack cannot be larger than your start stack!');
    } else {
      var removedStart = startRow.pop();
      var pushEnd = endRow.push(removedStart);
      pushEnd;
    }

    for (var w = 0; w <= endRow.length; w++) {
      if (stacks.b.length == 4) {
        console.log('Youve won!');
        return towersOfHanoi = true;
        
        } else if (stacks.c.length == 4) {
        console.log('Youve won!');
        return towersOfHanoi = true;
      }
    }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack, stacks);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
