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
 * @param head ListNode类 the head
 * @return bool布尔型
 */
// 样例过了80%,存在的问题是修改了原始链表
function isPail( head ) {
  let p = head;
  let q = reverseList(head);
  while(p) {
    if(p.val != q.val) {
      return false;
    }
    p = p.next;
    q = q.next;
  }
  return true;
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
  return prev;
}

// 将链表用数组存储起来
function isPail( head ) {
  let p = head;
  let arr = [];
  while(p) {
    arr.push(p.val);
    p = p.next;
  }
  for(let i = 0; i < parseInt(arr.length / 2); i++) {
    if(arr[i] != arr[arr.length - i - 1]){
      return false;
    }
  }
  return true;
}
// 双指针
function isPail( head ) {
  let p = head;
  let q = head;
  while(q != null && q.next != null) {
    p = p.next;
    q = q.next.next;
  }
  // 如果q不为空，说明链表的长度是奇数个
  if (q != null) {
      p = p.next;
  }
  // 反转的是链表后半部分
  p = reverseList(p);
  q = head;
  while(p) {
    if(p.val != q.val) {
      return false;
    }
    p = p.next;
    q = q.next;
  }
  return true;
}
module.exports = {
  isPail : isPail
};