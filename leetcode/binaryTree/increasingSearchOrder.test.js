import { TreeNode, increasingBST } from './increasingSearchOrder'

describe('test', () => {
  test('increasingBST', () => {
    const left = new TreeNode(3, new TreeNode(1), new TreeNode(4, null, new TreeNode(5)))
    const right = new TreeNode(7)

    const test = increasingBST(new TreeNode(6, left, right))
    const result = new TreeNode(1, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6, null, new TreeNode(7))))))

    expect(test).toEqual(result)
  })
})
