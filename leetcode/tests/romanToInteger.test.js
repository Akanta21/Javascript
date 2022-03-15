import { romanToInt } from '../romanToInteger'

describe('', () => {
  test('s = "III"', () => {
    const testCase = 'III'

    expect(romanToInt(testCase)).toEqual(3)
  })

  test('s = "LVIII"', () => {
    const testCase = 'LVIII'

    expect(romanToInt(testCase)).toEqual(58)
  })

  test('s = "MCMXCIV"', () => {
    const testCase = 'MCMXCIV'

    expect(romanToInt(testCase)).toEqual(1994)
  })
})
