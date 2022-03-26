import { threeSum } from '../threeSum'

describe('twoCitySchedule', () => {
  it('[-1,0,1,2,-1,-4]', () => {
    const test1 = [-1, 0, 1, 2, -1, -4]
    expect(threeSum(test1)).toEqual([[-1, -1, 2], [-1, 0, 1]])
  })

  it('should return false', () => {
    const test1 = [-2, 0, 0, 2, 2]
    expect(threeSum(test1)).toEqual([[-2, 0, 2]])
  })
})
