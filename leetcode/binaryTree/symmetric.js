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
 * @return {boolean}
 */
export const isSymmetric = function (root) {
  if (!root) return true

  const q = [root, root]

  while (q.length > 0) {
    console.log(q)
    const [l, r] = [q.shift(), q.shift()]
    if (!l && !r) continue
    if (!!l !== !!r || l.val !== r.val) return false
    q.push(l.left, r.right, l.right, r.left)
  }

  return true
}
