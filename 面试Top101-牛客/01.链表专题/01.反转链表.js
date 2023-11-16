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
// 解法一： 迭代解决
function ReverseList( head ) {
    let prev = null;
    let curr =head;
    while(curr != null) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    //为什么返回pre？因为pre是反转之后的头节点
    return prev;
}

// 解法二： 递归
function ReverseList2( head ) {
  if(head == null || head.next == null) {
    return head
  }
  // 保存当前的下一个节点
  let nextNode = head.next;
  // 递归调用
  // 从当前节点的下一个结点开始递归调用
  let ans = ReverseList2(nextNode);
  //让当前结点的下一个结点的 next 指针指向当前节点
  nextNode.next = head;
  //同时让当前结点的 next 指针指向NULL ，从而实现从链表尾部开始的局部反转
  head.next = null;
  return ans;
} 
module.exports = {
  ReverseList : ReverseList
};