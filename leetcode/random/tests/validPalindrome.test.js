import { validPalindrome } from '../validPalindrome'

describe('test validPalindrome', () => {
  test('word "abc" is false', () => {
    const test = validPalindrome('abc')

    expect(test).toEqual(false)
  })

  test('word aba is true', () => {
    const test = validPalindrome('aba')

    expect(test).toEqual(true)
  })

  test('word abda is true', () => {
    const test = validPalindrome('abda')

    expect(test).toEqual(true)
  })

  test('word "cbbcc" is true', () => {
    const test = validPalindrome('cbbcc')

    expect(test).toEqual(true)
  })

  test('word ""deeee"" is true', () => {
    const test = validPalindrome('deeee')

    expect(test).toEqual(true)
  })
})
