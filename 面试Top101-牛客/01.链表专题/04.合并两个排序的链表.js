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
 * @param pHead1 ListNode类 
 * @param pHead2 ListNode类 
 * @return ListNode类
 */
function Merge( pHead1 ,  pHead2 ) {
  if(pHead1 == null) return pHead2;
  if(pHead2 == null) return pHead1;
  let newHead = null;
  let p = null;
  let p1 = pHead1, p2 = pHead2;
  while(p1!= null && p2 != null) {
    if(p1.val < p2.val) {
      if(newHead == null) {
        newHead = p1;
        p = newHead;
      } else {
        p.next = p1;
        p = p.next;
      }
      p1 = p1.next;
    } else {
      if(newHead == null) {
        newHead = p2;
        p = newHead;
      } else {
        p.next = p2;
        p = p.next;
      }
      p2 = p2.next;
    }
  }
  if(p1 != null) {
    p.next = p1;
  }
  if(p2 != null) {
    p.next = p2;
  }
  return newHead;
}
// 递归
function Merge2( pHead1 ,  pHead2 ) {
  if(pHead1 == null || pHead2 == null) {
    return pHead1 == null ? pHead2 : pHead1;
  }
  if(pHead1.val < pHead2.val) {
    pHead1.next = Merge2(pHead1.next, pHead2)
    return pHead1;
  } else {
    pHead2.next = Merge2(pHead1, pHead2.next);
    return pHead2;
  }
}
module.exports = {
  Merge : Merge
};