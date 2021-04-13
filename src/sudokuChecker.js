export function SudokuChecker(puzzle) {
  this.puzzle = puzzle;
}

SudokuChecker.prototype.validator = function() {
  // loop through each row
  for (let i = 0; this.puzzle; i++) {
    // make a copy of the current row
    const row = [].concat(this.puzzle[i])
    // while there are 2+ elements in the current row...
    while (row.length > 1) {
      const currentValue = row.shift() // kickoff the first element
      // check if there are values in the row that are duplicate of the current value
      if (row.includes(currentValue)) {
        // then we have a duplicate value, IE NOT VALID
        return false
      }
    }
  }
  return true
  // validate rows
  // validate cols
  // validate boxes
}

// const mySudokuChecker = new SudokuChecker([[1,2,3,4,5,6,7,8,9]])
// mySudokuChecker.puzzle = [ [1,2,3,4,5,6,7,8,9], 1, 2, 3 ]
// mySudokuChecker.puzzle[0] = [1,2,3,4,5,6,7,8,9]
// mySudokuChecker.puzzle[1] = 1
// mySudokuChecker.puzzle[2] = 2
// mySudokuChecker.puzzle[4] = 3

// go thru each row, and then check if that is valid
// const array = [1,2,3]
// const arrayCopy = [...array]
// arrayCopy => [1,2,3]


