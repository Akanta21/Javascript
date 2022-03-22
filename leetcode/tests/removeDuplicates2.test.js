import { removeDuplicates2 } from '../removeDuplicates2'

describe('removeDuplicates', () => {
  test('', () => {
    const test = removeDuplicates2([2, 4, 3, 4, 5])

    expect(test).toEqual([2, 3, 4, 5])
  })
})
