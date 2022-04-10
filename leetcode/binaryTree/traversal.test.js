import { levelOrder, TreeNode } from './traversal'

describe('test traversal', () => {
  test('[3,9,20,null,null,15,7]', () => {
    const leftBase = new TreeNode(9)
    const rightBase = new TreeNode(20, new TreeNode(15), new TreeNode(7))

    const input = new TreeNode(3, leftBase, rightBase)

    const test = levelOrder(input)

    expect(test).toEqual([[3], [9, 20], [15, 7]])
  })
})
