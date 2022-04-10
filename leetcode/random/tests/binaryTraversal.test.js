import { TreeNode, inorderTraversal } from '../binaryTraversal'

describe('inorderTraversal', () => {
  it('should inorderTraversal', () => {
    const leftNode = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    const rightNode = new TreeNode(2, new TreeNode(3), new TreeNode(5))
    const baseNode = new TreeNode(1, leftNode, rightNode)

    const test = inorderTraversal(baseNode)

    expect(test).toEqual([2, 1, 3, 1, 3, 2, 5])
  })
})
