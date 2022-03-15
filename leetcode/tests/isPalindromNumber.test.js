import { isPalindromeNumber } from '../isPalindromNumber'

describe('isPalindromNumber', () => {
  test('121 returns true', () => {
    const test = isPalindromeNumber(121)

    expect(test).toEqual(true)
  })

  test('-121 returns false', () => {
    const test = isPalindromeNumber(-121)

    expect(test).toEqual(false)
  })

  test('1223 returns false', () => {
    const test = isPalindromeNumber(1223)

    expect(test).toEqual(false)
  })

  test('123 returns false', () => {
    const test = isPalindromeNumber(123)

    expect(test).toEqual(false)
  })
})
