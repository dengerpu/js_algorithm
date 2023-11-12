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
 * @return ListNode类
 */
function oddEvenList( head ) {
  if(head == null) return head;
  let odd = head; // 奇
  let even = head.next; // 偶
  let newEvenHead = even;
  while(even && even.next) {
    // 偶元素指向奇元素的下一个（偶元素）
    odd.next = even.next;
    // odd进入后一个奇数位
    odd = odd.next;
    // even连接后一个奇数的后一位，即偶数位
    even.next = odd.next;
    // even进入后一个偶数位
    even = even.next;
  }
  // even整体接在odd后面
  odd.next = newEvenHead;
  return head;
}
module.exports = {
  oddEvenList : oddEvenList
};