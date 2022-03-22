import { brokenCalculatorMinus } from '../brokenCalculatorMinus'

describe('test maxAreaOfIsland', () => {
  test('brokenCalculatorMinus', () => {
    expect(brokenCalculatorMinus(2, 3)).toEqual(2)
  })

  test('brokenCalculatorMinus', () => {
    expect(brokenCalculatorMinus(5, 8)).toEqual(2)
  })

  test('brokenCalculatorMinus', () => {
    expect(brokenCalculatorMinus(3, 10)).toEqual(3)
  })
})
