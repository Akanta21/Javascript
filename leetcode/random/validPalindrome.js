/**
 * @param {string} s
 * @return {boolean}
 */
export const validPalindrome = function (s) {
  let i = 0
  let j = s.length - 1

  while (i <= j) {
    if (s[i] !== s[j]) {
      return isPalindrom(s, i + 1, j) || isPalindrom(s, i, j - 1)
    }
    i++
    j--
  }

  return true
}

const isPalindrom = (s, low, high) => {
  while (low < high) {
    if (s[low] !== s[high]) return false
    low++
    high--
  }
  return true
}
