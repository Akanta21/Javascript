/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
export const shiftGrid = function (grid, k) {
  const arrayLength = grid[0].length
  const totalLength = grid.length * arrayLength

  if (arrayLength === k) {
    const last = grid.pop()
    console.log('last', last)
    console.log('grid', grid)
    grid.unshift(last)
    return grid
  }

  if (totalLength === k) {
    return grid
  }

  k %= arrayLength

  const flattened = grid.flat()

  const sFlattened = [...flattened.slice(-k), ...flattened.slice(0, -k)]
  const shifted = []

  for (let i = 0; i < totalLength; i += arrayLength) {
    shifted.push(sFlattened.slice(i, i + arrayLength))
  }
  return shifted
}
