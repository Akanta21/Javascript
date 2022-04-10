import { integerToRoman } from '../integerToRoman'

describe('test', () => {
  test('integer to roman for 7 = VII', () => {
    const test = integerToRoman(7)

    expect(test).toEqual('VII')
  })
})
