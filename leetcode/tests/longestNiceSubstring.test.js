import { longestNiceSubstring } from '../longestNiceSubstring'

describe('test longestNiceSubstring', () => {
  test('', () => {
    const test = longestNiceSubstring('YazaAay')

    expect(test).toEqual(3)
  })

  test('', () => {
    const test = longestNiceSubstring('mAzaay')

    expect(test).toEqual(-1)
  })

  test('', () => {
    const test = longestNiceSubstring('maMAyYzXxZ')

    expect(test).toEqual(10)
  })

  test('', () => {
    const test = longestNiceSubstring('bBBCdgY')

    expect(test).toEqual(3)
  })

  test('', () => {
    const test = longestNiceSubstring('')

    expect(test).toEqual(-1)
  })

  test('', () => {
    const test = longestNiceSubstring('a')

    expect(test).toEqual(-1)
  })
})
