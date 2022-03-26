import { binarySearch } from '../binarySearch'

describe('binarySearch', () => {
  it('[-1,0,3,5,9,12]', () => {
    const test1 = [-1, 0, 3, 5, 9, 12]
    const target = 9
    expect(binarySearch(test1, target)).toEqual(4)
  })

  it('should return false', () => {
    const test1 = [-1, 0, 3, 5, 9, 12]
    const target = 2
    expect(binarySearch(test1, target)).toEqual(-1)
  })

  it('should return false', () => {
    const test1 = [2, 5]
    const target = 5
    expect(binarySearch(test1, target)).toEqual(1)
  })
})
