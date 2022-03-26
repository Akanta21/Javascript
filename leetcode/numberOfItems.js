/*
 * Complete the 'numberOfItems' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY startIndices
 *  3. INTEGER_ARRAY endIndices
 */

export function numberOfItems (s, startIndices, endIndices) {
  // Write your code here
  console.log(s)
  console.log(startIndices)
  console.log(endIndices)

  const idx = 0
  let found = 0

  const stack = []

  const substring = s.slice(startIndices[idx] - 1, endIndices[idx])

  const map = {}

  for (let i = 0; i < substring.length; i++) {
    if (map['|'] && substring[i] === '*' && i > map['|']) {
      found++
    }
    map[substring[i]] = i
  }

  if (map['|'] > map['*']) {
    stack.push(found)
  }

  return stack
}

// *|* => 0

// *|*|*| => 2
