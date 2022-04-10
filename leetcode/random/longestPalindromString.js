/**
 * @param {string} s
 * @return {string}
 */
const palindromeString = (str, i, j) => {
  // it is a palindrome -> starting from i and j
  while (i >= 0 && j < str.length && str[i] === str[j]) {
    i-- // to the left;
    j++ // to the right;
  }

  // longest palindrome found in substring
  return str.slice(i + 1, j)
}

export const longestPalindrome = function (s) {
  let longest = ''

  if (s.length <= 1) {
    return s
  }

  for (let i = 0; i < s.length; i++) {
    // find longest odd substring
    const substr1 = palindromeString(s, i, i)
    // find longest even substring
    const substr2 = palindromeString(s, i, i + 1)

    const longer = substr1.length > substr2.length ? substr1 : substr2

    if (longer.length > longest.length) {
      longest = longer
    }
  }

  return longest
}
