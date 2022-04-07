import { threeSumMulti } from '../threeSumMulti'

describe('test', () => {
  test('test arr = [1,1,2,2,3,3,4,4,5,5], target = 8', () => {
    const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
    const target = 8

    const test = threeSumMulti(arr, target)

    expect(test).toEqual(20)
  })
})
