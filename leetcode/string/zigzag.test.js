import { convert } from './zigzag'

describe('test', () => {
  test('i am converting', () => {
    // Input: s = "PAYPALISHIRING", numRows = 3
    // Output: "PAHNAPLSIIGYIR"

    const input = 'PAYPALISHIRING'
    const num = 3
    const output = 'PAHNAPLSIIGYIR'

    const test = convert(input, num)

    expect(test).toEqual(output)
  })
})
