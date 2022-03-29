import { minimizeLargestSubarray } from '../minimizeLargestSubarray'

describe('minimizeLargestSubarrayer', () => {
  test('minimizeLargestSubarray([3,2,6,5,4], 2)', () => {
    const test = minimizeLargestSubarray([3, 2, 6, 5, 4], 2)

    expect(test).toEqual(11)
  })

  // test('minimizeLargestSubarray("peace", "maple")', () => {
  //     const test = minimizeLargestSubarray("peace", "maple")

  //     expect(test).toEqual("#-#-+")
  // })
})
