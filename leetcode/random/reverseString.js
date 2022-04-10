export const reverseString = (s) => {
  let i = 0
  const j = s.length
  let temp

  while (i < j / 2) {
    temp = s[i]
    s[i] = s[j - 1 - i]
    s[j - 1 - i] = temp

    i++
  }

  return s
}
