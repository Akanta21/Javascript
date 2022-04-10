/**
 * export function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 * Definition for singly-linked list.
 */
export function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function mergeList (a, b) {
  const dummy = new ListNode(0)
  let temp = dummy

  while (a !== null && b !== null) {
    if (a.val < b.val) {
      temp.next = a
      a = a.next
    } else {
      temp.next = b
      b = b.next
    }

    temp = temp.next
  }

  if (a !== null) {
    temp.next = a
  }

  if (b !== null) {
    temp.next = b
  }

  console.log('return', dummy)

  return dummy.next
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
export const mergeKLists = function (lists) {
  if (lists.length < 1) return new ListNode()

  while (lists.length > 1) {
    const l = lists.shift()
    const r = lists.shift()

    const m = mergeList(l, r)
    lists.push(m)
  }

  return lists[0]
}
