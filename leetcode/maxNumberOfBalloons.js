export const maxNumberOfBalloons = (text) => {
  const map = { b: 0, a: 0, l: 0, n: 0 }

  for (const character of text) {
    map[character]++
  }

  return Math.floor(
    Math.min(map.b, map.a, map.l / 2, map.n)
  )
}
