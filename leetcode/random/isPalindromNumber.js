/**
 * @param {number} x
 * @return {boolean}
 */
export const isPalindromeNumber = function (x) {
  if (x < 0) return false

  let rev = 0
  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    rev = rev * 10 + i % 10
  }
  return rev === x

  // reverse the string representation of x
//   const reverse = String(x).split('').reverse().join('')
  // compare the value regardless of types
//   return x === reverse
}
