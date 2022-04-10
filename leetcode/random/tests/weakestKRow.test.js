import { kWeakestRows } from '../weakestKRow'

describe('kWeakestRows', () => {
  it('should kWeakestRows', () => {
    // Input: mat =
    // [[1,1,0,0,0],
    //  [1,1,1,1,0],
    //  [1,0,0,0,0],
    //  [1,1,0,0,0],
    //  [1,1,1,1,1]],
    // k = 3
    // Output: [2,0,3]
    const mat =
      [[1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1]]
    const k = 3
    const test = kWeakestRows(mat, k)

    expect(test).toEqual([2, 0, 3])
  })

  // it('should kWeakestRows', () => {
  //     // Input: mat =
  //     // [[1,0,0,0],
  //     //  [1,1,1,1],
  //     //  [1,0,0,0],
  //     //  [1,0,0,0]],
  //     // k = 2
  //     // Output: [0,2]
  //     const mat =
  //     [[1,0,0,0],
  //      [1,1,1,1],
  //      [1,0,0,0],
  //      [1,0,0,0]]
  //     const k = 2

  //   const test = kWeakestRows(mat, k)

  //   expect(test).toEqual([0,2])
  // })
})
