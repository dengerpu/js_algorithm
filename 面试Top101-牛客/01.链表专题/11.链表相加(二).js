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
 * @param head1 ListNode类 
 * @param head2 ListNode类 
 * @return ListNode类
 */
function addInList( head1 ,  head2 ) {
  // write code here
  // 先将链表逆置
  let p = reverseList(head1);
  let q = reverseList(head2);
  // 添加一个头结点
  let newHead = new ListNode(-1);
  let h = newHead;
  let prefix = 0;
  while(p!= null || q!= null) {
    let num = prefix + (p != null ? p.val: 0) + (q != null ? q.val : 0);
    if(num >= 10) {
      prefix = parseInt(num / 10);
      num = num % 10;
    } else {
      prefix = 0
    }
    let temp = new ListNode(num);
    h.next = temp;
    h = temp;
    if( p != null) {
      p = p.next;
    }
    if(q != null) {
      q = q.next;
    }
  }
  if(prefix != 0) {
    h.next = new ListNode(prefix);
  }
  return reverseList(newHead.next);
}
function reverseList(head) {
  let prev = null;
  let curr = head;
  while(curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev
}
// 借助栈
function addInList( head1 ,  head2 ) {
  if(head1 == null) {
    return head2;
  }
  if(head2 == null) {
    return head1;
  }
  let stack1 = []
  let stack2 = []
  let p = head1;
  let q = head2;
  while(p) {
    stack1.push(p.val);
    p = p.next;
  }
  while(q) {
    stack2.push(q.val);
    q = q.next;
  }
  let prefix = 0;

  let stack = []
  while(stack1.length > 0 || stack2.length > 0) {
    let num1 = stack1.length > 0 ? stack1.pop() : 0;
    let num2 = stack2.length > 0 ? stack2.pop() : 0;
    let num = num1 + num2 + prefix;
    if(num >= 10) {
      prefix = parseInt(num / 10);
      num = num % 10;
    } else {
      prefix = 0
    }
    stack.push(num);
  }
  if(prefix != 0) {
    stack.push(prefix);
  }
  let newHead = new ListNode(-1);
  let h = newHead;
  while(stack.length > 0) {
    let temp = new ListNode(stack.pop());
    h.next = temp;
    h = temp; 
  }
  return newHead.next;
}
module.exports = {
  addInList : addInList
};