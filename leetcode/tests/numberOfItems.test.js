import { numberOfItems } from '../numberOfItems'

describe('', () => {
  test('', () => {
    // Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    // Output: 6
    // Explanation: [4,-1,2,1] has the largest sum = 6.

    const s = '*|*|*|'
    const startIndices = [1]
    const endIndices = [3]

    expect(numberOfItems(s, startIndices, endIndices)).toEqual([])
  })

  test('', () => {
    const s = '*|*|*|'
    const startIndices = [1]
    const endIndices = [4]

    expect(numberOfItems(s, startIndices, endIndices)).toEqual([1])
  })

  test('', () => {
    const s = '*|*|*|'
    const startIndices = [1]
    const endIndices = [6]

    expect(numberOfItems(s, startIndices, endIndices)).toEqual([2])
  })
})
