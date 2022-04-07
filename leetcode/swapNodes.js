/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export const swapNodes = function (head, k) {
  // first find the new head
  let A = head; let B = head

  for (let i = 0; i < k; i++) {
    A = A.next
  }

  const K = A
  A = A.next

  while (A) {
    A = A.next
    B = B.next
  }

  const temp = K.val
  K.val = B.val
  B.val = temp

  console.log(head)

  return head
}

export function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
