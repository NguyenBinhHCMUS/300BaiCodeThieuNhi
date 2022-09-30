/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Xem list 1 va list 2
// List 1 < List 2, point toi list1 else.
//
var mergeTwoLists = function (list1, list2) {
  //     Dummy node
  const dummy = new ListNode(0, null);
  let head = dummy;

  while (list1 && list2) {
    console.log("before loop:", {
      list: dummy,
      head,
      list1: list1,
      list2: list2,
    });
    if (list1.val < list2.val) {
      head.next = list1;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    head = head.next;
    console.log("after loop:", {
      list: dummy,
      head,
      list1: list1,
      list2: list2,
    });
  }
  if (list1) {
    head.next = list1;
  }
  if (list2) {
    head.next = list2;
  }

  return dummy.next;
};

// Input
// [1,2,4]
// [1,3,4]

// before loop: { list: [0], head: [0], list1: [1,2,4], list2: [1,3,4] }
// after loop: { list: [0,1,3,4], head: [1,3,4], list1: [1,2,4], list2: [3,4] }
// before loop: { list: [0,1,3,4], head: [1,3,4], list1: [1,2,4], list2: [3,4] }
// after loop: { list: [0,1,1,2,4], head: [1,2,4], list1: [2,4], list2: [3,4] }
// before loop: { list: [0,1,1,2,4], head: [1,2,4], list1: [2,4], list2: [3,4] }
// after loop: { list: [0,1,1,2,4], head: [2,4], list1: [4], list2: [3,4] }
// before loop: { list: [0,1,1,2,4], head: [2,4], list1: [4], list2: [3,4] }
// after loop: { list: [0,1,1,2,3,4], head: [3,4], list1: [4], list2: [4] }
// before loop: { list: [0,1,1,2,3,4], head: [3,4], list1: [4], list2: [4] }
// after loop: { list: [0,1,1,2,3,4], head: [4], list1: [4], list2: null }

// Output
// [1,1,2,3,4,4]
