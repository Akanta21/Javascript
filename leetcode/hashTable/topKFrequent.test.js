import { topKFrequent } from './topKFrequent'

describe('test', () => {
  test('input nums = [1,1,1,2,2,3], k = 2, output [1,2]', () => {
    const test = topKFrequent([1, 1, 1, 2, 2, 3], 2)

    expect(test).toEqual([1, 2])
  })

  test('input nums = [1,1,1,2,2,3,3], k = 2, output [1,2]', () => {
    const test = topKFrequent([1, 1, 1, 2, 2, 3, 3], 2)

    expect(test).toEqual([1, 2, 3])
  })
})
