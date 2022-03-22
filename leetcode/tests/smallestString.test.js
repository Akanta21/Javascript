import { getSmallestString } from '../smallestString'

describe('test get smallest string', () => {
  test('n = 4, k = 27 => aay', () => {
    const test = getSmallestString(4, 27)

    expect(test).toEqual('aaax')
  })
})
