import { twoCitySchedCost } from '../twoCitySchedule'

describe('twoCitySchedule', () => {
  it('[[10,20],[30,200],[400,50],[30,20]]', () => {
    const test1 = [[10, 20], [30, 200], [400, 50], [30, 20]]
    expect(twoCitySchedCost(test1)).toEqual(110)
  })

  it('should return false', () => {
    const test1 = [[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]]
    expect(twoCitySchedCost(test1)).toEqual(1859)
  })
})
