import { search } from '../searchRotatedSortedArray'

describe('search', () => {
  it('should search', () => {
    // Input: nums = [2,5,6,0,0,1,2], target = 0
    // Output: true
    const test = search([2, 5, 6, 0, 0, 1, 2], 0)

    expect(test).toEqual(true)
  })

  it('should search', () => {
    // Input: nums = [2,5,6,0,0,1,2], target = 3
    // Output: false

    const test = search([2, 5, 6, 0, 0, 1, 2], 3)

    expect(test).toEqual(false)
  })
})
