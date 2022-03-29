import { reverseString } from '../reverseString'

describe('test', () => {
  test('stringArray [H, e, l, l, o]', () => {
    const test = reverseString(['H', 'e', 'l', 'l', 'o'])
    expect(test).toEqual(['o', 'l', 'l', 'e', 'H'])
  })
})
