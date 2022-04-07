import { swapNodes, ListNode } from '../swapNodes'

describe('test', () => {
  test('swapping Nodes', () => {
    const nums = [2, 3, 4, 5]
    const listNode = nums.reduce((acc, current) => {
      return new ListNode(current, acc)
    }, new ListNode(1))

    const nums2 = [4, 3, 2, 5]
    const eListNode = nums2.reduce((acc, current) => {
      return new ListNode(current, acc)
    }, new ListNode(1))

    const test = swapNodes(listNode, 3)

    expect(test).toEqual(eListNode)
  })
})
