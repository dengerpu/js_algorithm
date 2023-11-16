/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param head ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
// 迭代做不出
function reverseKGroup( head ,  k ) {
  let prev = null;
  let curr = head;
  if( k == 1) {
    while(curr != null) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return prev;
  } else {
    let i = 1;
    let newHead = null;
    let oldHead = null;
    let oldTail = null;
    let node = null;
    while(curr != null) {
      if(i % k == 1) {
        if(prev != null) {
          oldHead = prev; // 逆转链表的第一个结点的前一个结点
        }
        oldTail = curr; // 逆转链表后的最后一个结点
      }
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
      i++;
      if(i % k == 0) {
        if(oldHead != null) {
          oldHead.next = prev;
        }
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
        if(newHead == null){
          newHead = prev
        }
        oldTail.next = curr;
        // prev和curr分别后移一位
        if(curr == null) {
          break;
        }
        i++;
      }
    }
    return newHead;
  }
}

// 递归
function reverseKGroup( head ,  k ) {
  // 找到每次翻转的尾部
  let tail = head;
  // 遍历k次到尾部
  for(let i = 0; i < k; i++) {
    // 如果不足k到了链表尾，直接返回，不翻转
    if(tail == null) {
      return head;
    }
    tail = tail.next;
  }
  // 翻转时需要的前序和当前节点
  let prev = null;
  let curr = head;
  while(curr != tail) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  // 当前尾指向下一段要翻转的链表
  head.next = reverseKGroup(tail, k);
  return prev;
}

module.exports = {
  reverseKGroup : reverseKGroup
};