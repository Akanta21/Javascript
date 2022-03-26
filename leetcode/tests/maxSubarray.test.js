import { maxSubArray } from '../maxSubarray'

describe('', () => {
  test('', () => {
    // Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    // Output: 6
    // Explanation: [4,-1,2,1] has the largest sum = 6.

    const test = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

    expect(maxSubArray(test)).toEqual(6)
  })

  // test('', () => {
  // // Input: nums = [1]
  // // Output: 1

  // const test = [1]

  // expect(maxSubArray(test)).toEqual(1)
  // })
})
