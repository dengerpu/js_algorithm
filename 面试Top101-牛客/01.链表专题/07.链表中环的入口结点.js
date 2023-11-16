/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    let slow = pHead;
    let fast = pHead;
    while(fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if(slow == fast) {
        let index1 = pHead;
        let index2 = slow;
        while(index1 != index2) {
          index1 = index1.next;
          index2 = index2.next;
        }
        return index1;
      }
    }
    return null;
}
// 利用数组保存访问过的结点
function EntryNodeOfLoop(pHead) {
  let arr = []
  let p = pHead;
  while(p != null) {
    if(arr.includes(p)) {
      return p;
    }
    arr.push(p);
    p = p.next;
  }
  return null;
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};