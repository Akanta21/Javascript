/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
export const kWeakestRows = function (mat, k) {
  // let stack = [];

  // for(let i = 0; i < mat.length; i++) {
  //     let cur = 0;
  //     for (let j = 0; j < mat[0].length; ++j, ++cur) {
  //     if (mat[i][j] === 0) break;
  //     }
  //     stack.push([cur, i]);
  // }

  // return stack
  //     .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  //     .slice(0, k)
  //     .map((item) => item[1])

  const searchLastFilled = (arr, left, right) => {
    if (left === right) return left
    const mid = Math.floor((left + right) / 2)
    return arr[mid] === 0 ? searchLastFilled(arr, left, mid) : searchLastFilled(arr, mid + 1, right)
  }

  const length = mat.length
  const mLength = mat[0].length
  const rows = []

  for (let i = 0; i < length; i++) {
    rows.push([searchLastFilled(mat[i], 0, mLength), i])
  }

  const some = rows
    .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    .map((item) => item[1])
    .splice(0, k)

  return some
}
