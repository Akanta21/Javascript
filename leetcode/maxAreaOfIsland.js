export const maxAreaOfIsland = (grid) => {
  let maxArea = 0; const n = grid.length; const m = grid[0].length

  // startPoint is [1,2] => coordinate
  const calculateArea = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0
    grid[i][j] = 0
    return 1 + calculateArea(i - 1, j) + calculateArea(i + 1, j) + calculateArea(i, j - 1) + calculateArea(i, j + 1)
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j]) {
        maxArea = Math.max(maxArea, calculateArea(i, j))
      }
    }
  }

  return maxArea
}
