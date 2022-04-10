import { longestSubstring } from '../longestSubstring'

describe('test', () => {
  test('"abcabcbb" = 3', () => {
    const test = longestSubstring('abcabcbb')

    expect(test).toEqual(3)
  })

  test('"bbbbb" = 1', () => {
    const test = longestSubstring('bbbbb')

    expect(test).toEqual(1)
  })

  test('"pwwkew" = 3', () => {
    const test = longestSubstring('pwwkew')

    expect(test).toEqual(3)
  })
})
