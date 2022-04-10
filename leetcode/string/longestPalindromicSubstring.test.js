import { longestPalindrome } from './longestPalindromicSubstring'

describe('test merge sort linked list', () => {
  test('t1', () => {
    // Input: s = "babad"
    // Output: "bab"
    // Explanation: "aba" is also a valid answer.
    const test = longestPalindrome('babad')

    expect(test).toEqual('bab')
  })

  //     test('t2', () => {
  // // Input: s = "cbbd"
  // // Output: "bb"
  //     const test = longestPalindrome("cbbd")

//     expect(test).toEqual("bb")
//     })
})
