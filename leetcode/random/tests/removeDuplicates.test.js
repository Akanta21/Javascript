import { removeDuplicates } from '../removeDuplicates'

describe('removeDuplicates', () => {
  test('', () => {
    const test = removeDuplicates([2, 2, 3, 4, 5])

    expect(test).toEqual(4)
  })
})
