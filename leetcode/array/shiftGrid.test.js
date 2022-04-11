import { shiftGrid } from './shiftGrid'

describe('test', () => {
  test('shiftGrid', () => {
    // Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
    // Output: [[9,1,2],[3,4,5],[6,7,8]]
    const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const noOfShifts = 1
    const output = [[9, 1, 2], [3, 4, 5], [6, 7, 8]]

    const test = shiftGrid(input, noOfShifts)

    expect(test).toEqual(output)
  })

  test('shiftGrid', () => {
    // Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
    // Output: [[9,1,2],[3,4,5],[6,7,8]]
    const input = [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]]
    const noOfShifts = 4
    const output = [[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]]

    const test = shiftGrid(input, noOfShifts)

    expect(test).toEqual(output)
  })

  // Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
  // Output: [[1,2,3],[4,5,6],[7,8,9]]

  test('shiftGrid', () => {
    // Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
    // Output: [[9,1,2],[3,4,5],[6,7,8]]
    const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const noOfShifts = 9
    const output = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    const test = shiftGrid(input, noOfShifts)

    expect(test).toEqual(output)
  })
})
