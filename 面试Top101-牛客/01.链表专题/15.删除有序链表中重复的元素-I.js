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
  if(head == null)
    return head;
  let prev = head;
  let curr = head.next;
  while(curr) {
    while(curr && prev.val == curr.val) {
      curr = curr.next;
    }
    if(curr) {
      // 找到下一个不同个的元素
      prev.next = curr;
      prev = prev.next;
      curr = curr.next;
    } else {
      // 解决全是重复元素
      prev.next = null;
    }
  }
  return head;
}
module.exports = {
  deleteDuplicates : deleteDuplicates
};