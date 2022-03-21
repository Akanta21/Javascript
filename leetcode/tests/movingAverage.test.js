import { movingAverage } from '../movingAverage'

describe('test movingAverage', () => {
  it('input [1,2,3,4,5] returns [2,3,4]', () => {
    const test = [1, 2, 3, 4, 5, 6]
    const window = 4
    const average = movingAverage(test, window)

    expect(average).toEqual([2.5, 3.5, 4.5])
  })
})
