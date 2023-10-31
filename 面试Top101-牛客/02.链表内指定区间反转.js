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
 * @param m int整型 
 * @param n int整型 
 * @return ListNode类
 */
function reverseBetween( head ,  m ,  n ) {
  let prev = null; // prev指向要逆转的链表区间的第一个结点
  let curr = head;
  let newHead = head;
  let ReversePrevNode = null; // prev的前一个结点
  for(let i = 1; i <= m; i++) {
    ReversePrevNode = prev
    prev = curr;
    curr = curr.next;
  }
  let ReverseLastNode = prev; // 指向要逆转的链表区间的第一个结点,逆转后会变成逆转区间的最后一个结点
  for(let i = 1; i <= n - m; i++) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  if(ReversePrevNode != null) {
    ReversePrevNode.next = prev;
    
  }
  if(ReverseLastNode != null) {
    ReverseLastNode.next = curr;
  }
  if(m >= 2) {
    return newHead;
  } else {
    return prev;
  }
}

// 解法二： 利用栈
function reverseBetween2( head ,  m ,  n ) {
  let stack = []
  let newHead = head;
  let node = head;
  let prev = null;
  for(let i = 1; i < m; i++) {
    prev = node;
    node = node.next;
  }
  // prev现在已经是逆转的前一个结点了
  let ReverseLastNode = null;
  for(let i = m; i <= n; i++) {
    stack.push(node);
    node = node.next;
    ReverseLastNode = node;
  }
  let p = null;
  if(stack.length > 0) {
    p = stack.pop();
  }
  let ReverseNewHead = p;
  while(stack.length > 0) {
    let node = stack.pop()
    p.next = node;
    p = p.next;
  }
  if(p != null) {
    p.next = ReverseLastNode;
  }
  if(prev != null) { // 说明不是是从第一个结点开始逆转的
    prev.next = ReverseNewHead
  }
  if(m == 1) { 
    return ReverseNewHead
  } else {
    return newHead
  }
}
module.exports = {
  reverseBetween : reverseBetween
};