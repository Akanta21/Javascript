/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function (strs) {
  // if strs is empty or none

  let prefix = ''

  if (!strs || !strs.length) return prefix

  strs = strs.sort()

  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      break
    } else {
      prefix += strs[0][i]
    }
  }

  return prefix
}
