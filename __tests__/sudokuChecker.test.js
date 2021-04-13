import { SudokuChecker } from "../src/sudokuChecker.js";


describe("TEMPLATE TEST", () => {
  test("sanity check", () => {
    expect(true).toEqual(true)
  })
})

describe("sudokuChecker()", () => {
  const validSudoku = [
    // columns
  // 0 1 2 3 4 5 6 7 8
    [1,2,3,4,5,6,7,8,9], // row 0
    [4,5,6,7,8,9,1,2,3], // row 1
    [7,8,9,1,2,3,4,5,6],
    [2,3,4,5,6,7,8,9,1],
    [5,6,7,8,9,1,2,3,4],
    [8,9,1,2,3,4,5,6,7],
    [3,4,5,6,7,8,9,1,2],
    [6,7,8,9,1,2,3,4,5],
    [9,1,2,3,4,5,6,7,8],
  ]

  // validSudoku[0] => row 0 => [1,2,3,4,5,6,7,8,9]
  // validSudoku[0][0] => row 0, col 0
  // validSudoku[1][0] => row 1, col 0

  const invalidSudoku = [
    [2,2,2,4,5,6,7,8,9], 
    [3,5,4,6,2,5,0,2,3],
    [2,2,2,4,5,6,7,8,9],
    [3,5,4,6,2,5,0,2,3],
    [2,2,2,4,5,6,7,8,9],
    [3,5,4,6,2,5,0,2,3],
    [2,2,2,4,5,6,7,8,9],
    [3,5,4,6,2,5,0,2,3],
    [3,5,4,6,2,5,0,2,3],
  ]

  test("SudokuChecker exists", () => {
    const mySudokuChecker = new SudokuChecker()
    expect(mySudokuChecker).toBeDefined()
  })

  test("SudokuChecker takes in a puzzle", () => {
    const myValidSudoku = new SudokuChecker(validSudoku)
    expect(myValidSudoku.puzzle).toEqual(validSudoku)
  })
})

describe("SudokuChecker.Validator()", () => {

  test("SudokuChecker.Validator exists", () => {
    const mySudokuChecker = new SudokuChecker()
    expect(mySudokuChecker.validator).toBeDefined();
  })
})


//let compNumber = rox[0] {
  arrray.inlcudes(compNumber)
  
}

// [1,1,2].includes(1) === true
// const ar = [1,2,3]
// currentVal = ar.shift() === 1
// ar === [2,3]
// ar.includes(currentVal) if true, then duplicate


for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

