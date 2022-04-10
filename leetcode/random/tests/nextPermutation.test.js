import { nextPermutation } from '../nextPermutation'

describe('test permutation', () => {
  test('test [7, 2, 3, 1, 5, 4, 3, 2, 0]', () => {
    const test = nextPermutation([7, 2, 3, 1, 5, 4, 3, 2, 0])
    expect(test).toEqual([])
  })
})
