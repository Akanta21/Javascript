import { maxNumberOfBalloons } from '../maxNumberOfBalloons'

describe('test', () => {
  test('max number of balloons', () => {
    const test = maxNumberOfBalloons('nlaebolko')

    expect(test).toEqual(1)
  })

  test('max number of balloons', () => {
    const test = maxNumberOfBalloons('loonbalxballpoon')

    expect(test).toEqual(2)
  })

  test('max number of balloons', () => {
    const test = maxNumberOfBalloons('leetcode')

    expect(test).toEqual(0)
  })
})
