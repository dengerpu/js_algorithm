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
function deleteDuplicates( head ) {
  if(head == null || head.next == null) return head;

  // 增加一个头结点，方便操作
  let newHead = new ListNode(1001);
  newHead.next = head;
  let curr = newHead;
  while(curr.next && curr.next.next) {
    if(curr.next.val == curr.next.next.val) {
      let temp = curr.next.val;
      while(curr.next && curr.next.val == temp) {
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next;
    }
  }
  return newHead.next;
}
module.exports = {
  deleteDuplicates : deleteDuplicates
};