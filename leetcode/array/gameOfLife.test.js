
import { gameOfLife } from './gameOfLife'

describe('test', () => {
  test('', () => {
    // Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
    // Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

    const test = gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]])

    expect(test).toEqual([[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]])
  })
})
