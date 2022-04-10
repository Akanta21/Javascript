import { containsDuplicate } from '../containsDuplicate'

describe('containsDuplicate', () => {
  test('[1,2,3,1]', () => {
    const s = [1, 2, 3, 1]

    expect(containsDuplicate(s)).toEqual(true)
  })

  test('[1,2,3,4]', () => {
    const s = [1, 2, 3, 4]

    expect(containsDuplicate(s)).toEqual(false)
  })

  test('[1,1,1,3,3,4,3,2,4,2]', () => {
    const s = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

    expect(containsDuplicate(s)).toEqual(true)
  })
})
