import { ListNode, mergeKLists } from './mergeSortedLinkedList'

describe('test merge sort linked list', () => {
  // test('', () => {
  //     const lList1 = new ListNode(1, new ListNode(4, new ListNode(5)))
  //     const lList2 = new ListNode(1, new ListNode(3, new ListNode(4)))
  //     const lList3 = new ListNode(2, new ListNode(6))

  //     const expected = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))))))

  //     const test = mergeKLists([lList1, lList2, lList3])

  //     expect(test).toEqual(expected)
  // })

  // test('t1', () => {
  //     const expected = new ListNode()

  //     const test = mergeKLists([])

  //     expect(test).toEqual(expected)
  // })

  test('t2', () => {
    const expected = new ListNode()

    const test = mergeKLists([])

    expect(test).toEqual(expected)
  })
  // test('t3', () => {
  //     const expected = new ListNode()

  //     const test = mergeKLists([expected])

  //     expect(test).toEqual(expected)
  // })
})
