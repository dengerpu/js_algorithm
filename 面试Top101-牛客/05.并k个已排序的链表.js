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
 * @param lists ListNode类一维数组 
 * @return ListNode类
 */
// 思路：两两合并
function mergeKLists( lists ) {
  const length = lists.length;
  
  if(length == 1) return lists[0];
  for(let i = 0; i < length - 1; i++) {
    lists[i + 1] = merge(lists[i], lists[i+1]);
  }
  return lists[length - 1];
}
function merge(head1, head2) {
  if(head1 == null) return head2;
  if(head2 == null) return head1;
  if(head1.val < head2.val) {
    head1.next = merge(head1.next, head2);
    return head1;
  } else {
    head2.next = merge(head1, head2.next);
    return head2;
  }
}
// 归并排序
// divideMerge
function divideMerge(lists, left , right) {
  if(left > right) {
    return null
  } else if (left == right) {
    return lists[left];
  }
  let mid = parseInt((left + right) / 2);
  return merge(divideMerge(lists, left, mid), divideMerge(lists, mid + 1, right));
}
function mergeKLists( lists ) {
  return divideMerge(lists, 0 , lists.length - 1);
}
module.exports = {
  mergeKLists : mergeKLists
};