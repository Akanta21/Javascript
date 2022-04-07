export const threeSumMulti = function (A, T) {
  const nMap = new Uint16Array(101); const third = T / 3; let ans = 0

  for (const val in A) nMap[A[val]]++

  for (let k = Math.min(T, 100); k >= third; k--) {
    const rem = T - k; const half = rem / 2
    for (let j = Math.min(rem, k); j >= half; j--) {
      const i = rem - j; const x = nMap[i]; const y = nMap[j]; const z = nMap[k]; let res

      console.log('j', j)
      console.log('k', k)
      console.log('i', i)

      if (i === k) {
        res = x * (x - 1) * (x - 2) / 6
      } else if (i === j) {
        res = x * (x - 1) / 2 * z
      } else if (j === k) {
        res = x * y * (y - 1) / 2
      } else {
        res = x * y * z
      }

      ans = (ans + res) % 10000007
      console.log('ans', ans)
    }
  }

  return ans
}
