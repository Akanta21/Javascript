import { isValid } from '../validParantheses'

describe('AllCombinationsOfSizeK', () => {
  it('should return true', () => {
    const test1 = '[]'
    expect(isValid(test1)).toEqual(true)
  })

  it('should return false', () => {
    const test1 = '[)'
    expect(isValid(test1)).toEqual(false)
  })
})
