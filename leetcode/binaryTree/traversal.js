/**
 * Definition for a binary tree node.
 */
export function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const levelOrder = function (root) {
  if (!root) return []

  const q = [root]

  const levels = []

  while (q.length > 0) {
    const qLen = q.length
    const currLevel = []

    for (let i = 0; i < qLen; i++) {
      const curr = q.shift()
      if (curr.left) q.push(curr.left)
      if (curr.right) q.push(curr.right)
      console.log('q', q)
      currLevel.push(curr.val)
    }
    levels.push(currLevel)
  }

  return levels
}
