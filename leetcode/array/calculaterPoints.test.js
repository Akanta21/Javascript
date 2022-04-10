import { calPoints } from './calculaterPoints'

describe('test', () => {
  test('cal points', () => {
    // Input: ops = ["5","2","C","D","+"]
    // Output: 30
    // Explanation:
    // "5" - Add 5 to the record, record is now [5].
    // "2" - Add 2 to the record, record is now [5, 2].
    // "C" - Invalidate and remove the previous score, record is now [5].
    // "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
    // "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
    // The total sum is 5 + 10 + 15 = 30.

    const input = ['5', '2', 'C', 'D', '+']
    const output = 30
    const test = calPoints(input)

    expect(test).toEqual(output)
  })
})
