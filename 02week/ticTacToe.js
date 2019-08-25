'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {

  if (board[0][0] && board[0][1] && board[0][2] === playerTurn) {
    return true;
  } else if (board[1][0] && board[1][1] && board[1][2] === playerTurn) {
    return true;
  } else if (board[2][0] && board[2][1] && board[2][2] === playerTurn) {
    return true;
  }
}

function verticalWin() {
  if (board[0][0] && board[1][0] && board[2][0] === playerTurn) {
    return true;
  } else if (board[0][1] && board[1][1] && board[2][1] === playerTurn) {
    return true;
  } else if (board[0][2] && board[1][2] && board[2][2] === playerTurn) {
    return true;
}
}

function diagonalWin() {
  if (board[0][0] && board[1][1] && board[2][2] === playerTurn) {
    return true;
  } else if (board[0][2] && board[1][1] && board[2][0] === playerTurn) {
    return true;
  }
}

function checkForWin() {
  horizontalWin();
  verticalWin();
  diagonalWin();
  if (horizontalWin() === true) {
    return true;
  } else if (verticalWin() === true) {
    return true;
  } else if (diagonalWin() === true) {
    return true;
  } else {
    return false;
  }
}

function ticTacToe(row, column) {
  if (row > 2 || column > 2) {
    console.log('Please keep your position on the board. Between 0 and 2.');
  } else if (row < 0 || column < 0) {
    console.log('Please keep your position on the board. Between 0 and 2.');
  } else {
    let rowNum = row * 1;
    let colNum = column * 1;

    function placeOnBoard(rowNum, colNum) {
      var turnCounter = 1;

    if (turnCounter == 2 || 4 || 6 || 8 || 10) {
      playerTurn = "O";
      board[rowNum][colNum] = playerTurn;
      return turnCounter + 1;
    } else if (turnCounter == 1 || 3 || 5 || 7 || 9) {
      playerTurn = "X";
      board[rowNum][colNum] = playerTurn;
      return turnCounter + 1;
    } else if (turnCounter > 3) {
      console.log('This game is a tie!')
    }
    }

    placeOnBoard(rowNum, colNum);

    
    
    // for (var i = 1; i < 11; i++) {
    //   if (i % 2 == 0) {
    //     playerTurn = "Y";
    //     board[rowNum][colNum] = playerTurn;
    //     console.log('This is i ' + i);
    //     return playerTurn;
    //   } else if (i == 10) {
    //     console.log('Its a tie!');
    //   } else {
    //     playerTurn = "Z";
    //     board[rowNum][colNum] = playerTurn;
    //     console.log('This is i ' + i);
    //     return playerTurn;
    //   }
    // }
    
    
  }

  



}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
