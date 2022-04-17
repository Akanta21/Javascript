export const generateMatrix = (n) => {
  const matrix = new Array(n).fill().map(() => new Array(n).fill(0))

  let count = 0

  let left = 0; let right = n - 1; let top = 0; let bottom = n - 1

  while (count < n * n) {
    for (let i = left; i <= right; i++) {
      count++
      matrix[top][i] = count
    }
    top++
    for (let i = top; i <= bottom; i++) {
      count++
      matrix[i][right] = count
    }
    right--
    for (let i = right; i >= left; i--) {
      count++
      matrix[bottom][i] = count
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
      count++
      matrix[i][left] = count
    }
    left++
  }

  return matrix

  // const directions = [[0,1], [1,0], [0,-1], [-1,0]]

  // let x = 0, y = 0, dir = 0;

  // for(let i = 0; i < n*n; i++){
  //     matrix[x][y] = i + 1
  //     let nextR = x + directions[dir][0]
  //     let nextC = y + directions[dir][1]

  //     if(
  //         matrix[nextR] === undefined
  //         || matrix[nextC] === undefined
  //         || matrix[nextR][nextC] !== 0
  //     ) {
  //         dir = (dir + 1) % 4
  //     }

  //     x += directions[dir][0]
  //     y += directions[dir][1]
  // }

  // return matrix
}
