import { longestCommonPrefix } from '../longestCommonPrefix'

describe('longestCommonPrefix', () => {
  test('', () => {
    const test = longestCommonPrefix(['flower', 'flow', 'flight'])

    expect(test).toEqual('fl')
  })
})
