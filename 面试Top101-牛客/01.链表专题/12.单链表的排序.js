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
 * @param head ListNode类 the head node
 * @return ListNode类
 */
function sortInList( head ) {
  let queue = []
  let p = head;
  while(p) {
    queue.push(p.val);
    p = p.next;
  }
  // 从大到小排序
  queue.sort((a,b) => b-a);
  let newHead = new ListNode(-1);
  let q = newHead;
  while(queue.length > 0) {
    let temp = new ListNode(queue.pop());
    q.next = temp;
    q = temp;
  }
  return newHead.next;
}
function mergeList(head1, head2) {
  if(head1 == null)
    return head2;
  if(head2 == null)
    return head1;
  let p = head1, q = head2, newHead = new ListNode(-1), curr = newHead;
  while(p && q) {
    if(p.val < q.val) {
      curr.next = p;
      curr = p;
      p = p.next;
    } else {
      curr.next = q;
      curr = q;
      q = q.next;
    }
  }
  if(p) {
    curr.next = p;
  }
  if (q) {
    curr.next = q;
  }
  return newHead.next;
}
function sortInList(head) {
  if(head == null || head.next == null) {
    return head;
  }
  let left = head;
  let mid = head.next;
  let right = head.next.next;
  // 右边的指针到达末尾时，中间的指针指向该段链表的中间
  while(right != null && right.next != null) {
    left = left.next;
    mid = mid.next;
    right = right.next.next;
  }
   //左边指针指向左段的左右一个节点，从这里断开
   left.next = null;
   return mergeList(sortInList(head), sortInList(mid));
}
module.exports = {
  sortInList : sortInList
};