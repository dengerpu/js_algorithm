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
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
// 快慢指针
function FindKthToTail( pHead ,  k ) {
  let slow = pHead;
  let fast = pHead;
  let i = 0;
  while(fast && i < k) {
    fast = fast.next;
    i++;
  }
  if(i != k) {
    return null;
  }
  while(fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

// 借助栈
function FindKthToTail( pHead ,  k ) {
  let stack = []
  let p = pHead;
  if(pHead == null || k == 0) {
    return null;
  }
  while(p) {
    stack.push(p);
    p = p.next;
  }
  if(stack.length < k) { // 说明不存在最后k个结点
    return null;
  }
  let firstNode = stack.pop();
  for(let i = 0; i < k -1; i++) {
    let temp = stack.pop();
    temp.next = firstNode;
    firstNode = temp;
  }
  return firstNode;
}
module.exports = {
  FindKthToTail : FindKthToTail
};