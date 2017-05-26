/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// var loopThroughBoard = function(colIndex, n) {

//   for (var rowIndex = 0; rowIndex < n; rowIndex++) {

//     togglePiece(colIndex,rowIndex);

//     if (!hasAnyRooksConflicts()) {

//       loopThroughBoard(colIndex+1, n);
//     }
//     togglePiece(x,rowIndex);
//   }
// };
var makeEmptyMatrix = function(n) {
  return _(_.range(n)).map(function() {
    return _(_.range(n)).map(function() {
      return 0;
    });
  });
};

window.findNRooksSolution = function(n) {
  var matrix = makeEmptyMatrix(n);
  var board = new Board(matrix);
  var solution = board.rows();

  for (var y = 0; y < n; y++) {
    for (var x = 0; x < n; x++) {
      board.togglePiece(y, x);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(y, x);
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var matrix = makeEmptyMatrix(n);
  var board = new Board(matrix);

  board.findNRooksSolution() {
    solutionCount++;
  };

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var matrix = makeEmptyMatrix(n);
  var board = new Board(matrix);
  var solution = board.rows();

  for (var y = 0; y < n; y++) {
    for (var x = 0; x < n; x++) {
      board.togglePiece(y, x);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(y, x);
      }
    }
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var matrix = makeEmptyMatrix(n);
  var board = new Board(matrix);

  board.findNQueensSolution() {
    solutionCount++;
  };

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
