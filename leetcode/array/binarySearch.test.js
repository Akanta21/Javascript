import { search } from './binarySearch'

describe('test', () => {
  test('', () => {
    const test = search([-1, 0, 3, 5, 9, 12], 9)

    expect(test).toEqual(4)
  })
})
