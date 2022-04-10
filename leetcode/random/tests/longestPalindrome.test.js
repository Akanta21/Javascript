import { longestPalindrome } from '../longestPalindromString'

describe('test palindrom', () => {
  test('abdaba', () => {
    const word = 'abdaba'
    const test = longestPalindrome(word)

    expect(test).toEqual('aba')
  })

  test('cbbd', () => {
    const word = 'cbbd'
    const test = longestPalindrome(word)

    expect(test).toEqual('bb')
  })

  test('abcbd', () => {
    const word = 'abcbd'
    const test = longestPalindrome(word)

    expect(test).toEqual('bcb')
  })
})
