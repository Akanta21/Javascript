import { findMedianSortedArrays } from './mergeSortedArray'

describe('test merge sorted array', () => {
  test('merge Sorted Array', () => {
    // Input: nums1 = [1,3], nums2 = [2]
    // Output: 2.00000
    // Explanation: merged array = [1,2,3] and median is 2.

    const nums1 = [1, 3]
    const nums2 = [2]

    const test = findMedianSortedArrays(nums1, nums2)

    expect(test).toEqual(2.00)
  })

  test('merge Sorted Array', () => {
    // Input: nums1 = [1,2], nums2 = [3,4]
    // Output: 2.50000
    // Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

    const nums1 = [1, 2]
    const nums2 = [3, 4]

    const test = findMedianSortedArrays(nums1, nums2)

    expect(test).toEqual(2.50)
  })

  test('merge Sorted Array', () => {
    // Input: nums1 = [0,0], nums2 = [0,0]
    // Output: 0.0000
    // Explanation: merged array = [0,0,0,0] and median is 0.

    const nums1 = [0, 0]
    const nums2 = [0, 0]

    const test = findMedianSortedArrays(nums1, nums2)

    expect(test).toEqual(0.00)
  })

  test('merge Sorted Array', () => {
    // Input: nums1 = [], nums2 = [2]
    // Output: 2.0000
    // Explanation: merged array = [2] and median is 2.

    const nums1 = [2]
    const nums2 = []

    const test = findMedianSortedArrays(nums1, nums2)

    expect(test).toEqual(2.00)
  })
})
