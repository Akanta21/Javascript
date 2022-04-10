import { minDominoRotations } from '../minDominoRotation'

describe('test minDominoRotations.test', () => {
  test('top: [1, 2, 3, 4, 5], bottom: [4,5,3,2,1]', () => {
    const tops = [1, 2, 3, 4, 6]
    const bottoms = [6, 6, 6, 6, 5]

    const test = minDominoRotations(tops, bottoms)

    expect(test).toEqual(1)
  })

  test('top: [1, 2, 3, 4, 5], bottom: [4,5,3,2,1]', () => {
    const tops = [1, 2, 3, 4, 5]
    const bottoms = [4, 5, 3, 2, 1]

    const test = minDominoRotations(tops, bottoms)

    expect(test).toEqual(-1)
  })

  test('top: [1, 2, 3, 4, 5], bottom: [4,5,3,2,1]', () => {
    const tops = [3, 2, 4, 4, 5, 4]
    const bottoms = [4, 4, 2, 2, 4, 3]

    const test = minDominoRotations(tops, bottoms)

    expect(test).toEqual(3)
  })

  test('top: [6,1,6,4,6,6], bottoms: [5,6,2,6,3,6]', () => {
    const tops = [6, 1, 6, 4, 6, 6]
    const bottoms = [5, 6, 2, 6, 3, 6]

    const test = minDominoRotations(tops, bottoms)

    expect(test).toEqual(2)
  })
})
