/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 
 * @return bool布尔型
 */
function hasCycle( head ) {
  let slow = head;
  let fast = head;
  while(fast!= null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow == fast) {
      return true;
    }
  }
  return false;
}
module.exports = {
  hasCycle : hasCycle
};