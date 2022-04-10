export const longestSubstring = (s) => {
  const map = {}
  let leftP = 0

  return s.split('').reduce((max, char, idx) => {
    leftP = map[char] >= leftP ? map[char] + 1 : leftP
    map[char] = idx

    return Math.max(max, idx - leftP + 1)
  }, 0)
}
