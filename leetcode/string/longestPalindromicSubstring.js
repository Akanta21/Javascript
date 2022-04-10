/**
 * @param {string} s
 * @return {string}
 */
const palindromeString = (str, i, j) => {
  while (i >= 0 && j < str.length && str[i] === str[j]) {
    i--
    j++
  }

  console.log('i', i)
  console.log('j', j)
  console.log(str.slice(i + 1, j))

  return str.slice(i + 1, j)
}

export const longestPalindrome = function (s) {
  let longest = ''

  if (s.length <= 1) return s

  for (let i = 0; i < s.length; i++) {
    const subs1 = palindromeString(s, i, i)
    const subs2 = palindromeString(s, i, i + 1) // even

    const longer = subs1.length > subs2.length ? subs1 : subs2

    if (longer.length > longest.length) longest = longer
  }

  return longest
}
