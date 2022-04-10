import { brokenCalculatorPlus } from '../brokenCalculatorPlus'

describe('test maxAreaOfIsland', () => {
  test('brokenCalculatorPlus', () => {
    expect(brokenCalculatorPlus(3, 13)).toEqual(3)
  })

  test('brokenCalculatorPlus', () => {
    expect(brokenCalculatorPlus(3, 20)).toEqual(4)
  })

  test('brokenCalculatorPlus', () => {
    expect(brokenCalculatorPlus(3, 45)).toEqual(4)
  })
})
