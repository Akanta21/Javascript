/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} root
* @return {TreeNode}
*/

export function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

export const increasingBST = function (root) {
  const newNode = new TreeNode(0)
  let current = newNode

  function getNodeRight (node) {
    if (node === null) return
    getNodeRight(node.left)
    node.left = null
    console.log('current', current)
    current.right = node
    console.log('currentR', current)
    current = node
    console.log('currentE', current)
    getNodeRight(node.right)
  }

  getNodeRight(root)

  return newNode.right
}
