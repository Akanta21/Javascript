/**
 * @param {string} s
 * @return {number}
 */

const romanHash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

const romanToInt = function (s) {
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    // console.log(romanHash[s.charAt(i)])
    // console.log(romanHash[s.charAt(i+1)])
    romanHash[s.charAt(i)] < romanHash[s.charAt(i + 1)] ? sum -= romanHash[s.charAt(i)] : sum += romanHash[s.charAt(i)]
  }
  return sum
}

export { romanToInt }
