
/**
 * @param {string} s
 * @return {number[]}
 */
export const partitionLabels = function (s) {
  const last = {}
  const res = []
  let lastP = 0
  let end = 0

  for (let i = 0; i < s.length; i++) {
    last[s[i]] = i
  }

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s[i]])

    if (i === end) {
      res.push(i - lastP + 1)
      lastP = i + 1
    }
  }
  return res
}
