import { generateMatrix } from './spiral_matrix'

describe('test', () => {
  test('matrix', () => {
    const test = generateMatrix(3)

    expect(test).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]])
  })
})
