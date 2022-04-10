import { countBits } from '../countBits'

describe('countBits', () => {
  it('should countBits', () => {
    const test = countBits(2)

    expect(test).toEqual([0, 1, 1])
  })

  it('should countBits', () => {
    const test = countBits(3)

    expect(test).toEqual([0, 1, 1, 2])
  })

  it('should countBits', () => {
    const test = countBits(5)

    expect(test).toEqual([0, 1, 1, 2, 1, 2])
  })

  it('should countBits', () => {
    const test = countBits(12)

    expect(test).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2])
  })
})
