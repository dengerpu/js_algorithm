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
 * @param n int整型 
 * @return ListNode类
 */
function removeNthFromEnd( head ,  n ) {
  let slow = head;
  let fast = head;
  // 由于题中说了保证n一定是有效地，所以就采用for循环
  // 如果不保证n有效，就要采用while循环，并且最后判断n==i
  for(let i = 0; i < n; i++) {
    fast = fast.next;
  }
  let prev = head;
  let falg = false; // 判断是不是要删除第一个结点
  // 在这一步，其实也可以判断如果fast为空就直接返回head.next
  while(fast) {
    falg = true;
    prev = slow;
    slow = slow.next;
    fast = fast.next;
  }
  prev.next = slow.next;
  if(!falg) {
    // 说明是要删除第一个结点
    return slow.next;
  } else {
    return head;
  }
}
// 方法二： 计算链表长度
function removeNthFromEnd( head ,  n ) {
  let prev = head;
  let q = head;
  let length = 0;
  while(q) {
    length++;
    q = q.next;
  }
  // length - n + 1个结点就是我们要删除的节点
  if(length == n) { // 说明要删除第一个结点
    return head.next;
  }
  // let i = 0;
  // while(prev) {
  //   i++;
  //   if(i == length - n) {
  //     prev.next = prev.next.next;
  //   }
  //   prev = prev.next;
  // }
  // 记得是从1开始的
  for(let i = 1; i < length - n; i++) {
    prev = prev.next;
  }
  if(prev.next == null) { // 说明要删除的是最后一个结点
    prev == prev.next;
  } else {
    prev.next = prev.next.next;
  }
  return head;
}
module.exports = {
  removeNthFromEnd : removeNthFromEnd
};