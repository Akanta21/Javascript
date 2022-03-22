import { removeElement } from '../removeElements'

describe('removeElement', () => {
  test('', () => {
    const test = removeElement([2, 3, 2, 4, 5], 2)

    expect(test).toEqual(3)
  })
})
