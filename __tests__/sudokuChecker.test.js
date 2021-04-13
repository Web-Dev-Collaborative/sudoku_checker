describe("TEMPLATE TEST", () => {
  test("sanity check", () => {
    expect(true).toEqual(true)
  })
})

describe("sudokuChecker()", () => {
  const validSudoku = [
    // rows 0-8
    [1,2,3,4,5,6,7,8,9], // column 0
    [4,5,6,7,8,9,1,2,3], // column 1
    [7,8,9,1,2,3,4,5,6],
    [2,3,4,5,6,7,8,9,1],
    [5,6,7,8,9,1,2,3,4],
    [8,9,1,2,3,4,5,6,7],
    [3,4,5,6,7,8,9,1,2],
    [6,7,8,9,1,2,3,4,5],
    [9,1,2,3,4,5,6,7,8], // col 9
  ]
  const invalidSudoku = [
    // rows 0-8
    [2,2,2,4,5,6,7,8,9], // column 0
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
    const mySudokuChecker = new mySudokuChecker()
    expect(mySudokuChecker).toBeDefined()
  })

})
