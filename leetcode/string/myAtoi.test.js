import { myAtoi } from './myAtoi'

describe('test', () => {
  test('', () => {
    // Input: s = "42"
    // Output: 42

    const test = myAtoi('42')

    expect(test).toEqual(42)
  })

  test('', () => {
    // Input: s = "   -42"
    // Output: 42

    const test = myAtoi('   -42')

    expect(test).toEqual(-42)
  })

  test('', () => {
    // Input: s = "4193 with words"
    // Output: 42

    const test = myAtoi('4193 with words')

    expect(test).toEqual(4193)
  })
})
