// returns length

const isUpperCase = (s) => s.toUpperCase() === s

const longSubstring = (s) => {
  if (s.length < 2 || !s.length) {
    return ''
  }

  let i = 0

  for (; i < s.length; i++) {
    if (isUpperCase(s[i]) && !s.includes(s[i].toLowerCase())) {
      break
    }
    if (!isUpperCase(s[i]) && !s.includes(s[i].toUpperCase())) {
      break
    }
  }

  if (i === s.length) {
    return s
  }

  const leftSubstring = longSubstring(s.substring(0, i)) || ''
  const rightSubstring = longSubstring(s.substring(i + 1)) || ''

  return leftSubstring.length >= rightSubstring.length ? leftSubstring : rightSubstring
}

export const longestNiceSubstring = (s) => {
  const substring = longSubstring(s)

  return substring ? substring.length : -1
}
