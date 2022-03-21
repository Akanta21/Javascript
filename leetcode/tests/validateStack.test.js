import { validateStack } from '../validateStack'

describe('test validateStack.test', () => {
  test('pushed: [1, 2, 3, 4, 5], popped: [4,5,3,2,1]', () => {
    const pushed = [1, 2, 3, 4, 5]
    const popped = [4, 5, 3, 2, 1]

    const test = validateStack(pushed, popped)

    expect(test).toEqual(true)
  })
})
