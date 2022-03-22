import { maxAreaOfIsland } from '../maxAreaOfIsland'

describe('test maxAreaOfIsland', () => {
  test('grid [[1,0,0,1], [1,1,1,0], [1,0,0,1]', () => {
    const testData = [
      [1, 0, 0, 1],
      [1, 1, 1, 0],
      [1, 0, 0, 1]
    ]

    expect(maxAreaOfIsland(testData)).toEqual(5)
  })
})
