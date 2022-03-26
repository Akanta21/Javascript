import { isSubsequence } from '../subsequence'

describe('twoCitySchedule', () => {
  it('[-1,0,1,2,-1,-4]', () => {
    const s = 'abc'; const t = 'ahbgdc'

    expect(isSubsequence(s, t)).toEqual(true)
  })

  it('should return false', () => {
    const s = 'axc'; const t = 'ahbgdc'
    expect(isSubsequence(s, t)).toEqual(false)
  })

  it('should return false', () => {
    const s = 'acb'; const t = 'ahbgdc'
    expect(isSubsequence(s, t)).toEqual(false)
  })
})
