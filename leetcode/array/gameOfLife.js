export const gameOfLife = (arr) => {
  const checkNeighbors = (r, c, board) => {
    const radius = [-1, 0, +1]; let count = 0
    for (let i = 0; i < radius.length; i++) {
      for (let j = 0; j < radius.length; j++) {
        if (!(radius[i] === 0 && radius[j] === 0) && board[r + radius[i]] != null) {
          const neighbor = board[r + radius[i]][c + radius[j]]
          if (Math.abs(neighbor) === 1) count += 1
        }
      }
    }
    return count
  }

  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      const score = checkNeighbors(r, c, arr)
      const cell = arr[r][c]

      if (cell === 0 && score === 3) {
        arr[r][c] = 2
      }

      if (cell === 1 && (score > 3 || score < 2)) {
        arr[r][c] = -1
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === -1) arr[i][j] = 0
      if (arr[i][j] === 2) arr[i][j] = 1
    }
  }

  return arr
}
