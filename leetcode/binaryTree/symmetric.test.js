import { isSymmetric, TreeNode } from './symmetric'

describe('test', () => {
  test('isSymmetric', () => {
    const leftBase = new TreeNode(2, new TreeNode(3), new TreeNode(4))
    const rightBase = new TreeNode(2, new TreeNode(4), new TreeNode(3))

    const input = new TreeNode(1, leftBase, rightBase)

    const test = isSymmetric(input)

    expect(test).toEqual(true)
  })
})
