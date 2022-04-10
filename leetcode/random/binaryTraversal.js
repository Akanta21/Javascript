export class TreeNode {
  constructor (val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export const inorderTraversal = (root) => {
  const output = []
  if (root === null) {
    return output
  }
  const stack = []
  let current = root

  while (current !== null || stack.length !== 0) {
    if (current !== null) {
      stack.push(current)
      current = current.left
    } else {
      current = stack.pop()
      output.push(current.val)
      current = current.right
    }
  }

  return output
}
