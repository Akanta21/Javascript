import { findDuplicate } from '../duplicateNums'

describe('test', () => {
  test('test', () => {
    const nums = [1, 3, 4, 2, 2]

    expect(findDuplicate(nums)).toEqual(2)
  })
})
