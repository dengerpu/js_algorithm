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


// 先实现一个优先队列
class PriorityQueue {
  constructor(compare) {
    if(typeof compare !== 'function') {
      throw new Error('compare function required!')
    }
    this.data = []
    this.compare = compare
  }
  // 二分查找，寻找插入位置
  search(target) {
    let low = 0, high = this.data.length;
    while(low < high) {
      let mid = low + (high - low) >> 1
      if(this.compare(this.data[mid].val, target.val) > 0) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }
  // 添加
  push(elem) {
    let index = this.search(elem);
    this.data.splice(index, 0, elem);
    return this.data.length;
  }
  // 取出最优元素
  pop() {
    return this.data.pop();
  }
  // 查看最优元素
  peek() {
    return this.data[this.data.length - 1];
  }
  isEmpty() {
    return this.data.length == 0
  }
}
function mergeKLists( lists ) {
  // 小顶堆
  const queue = new PriorityQueue((a, b) => b.val - a.val);
  // 遍历所有链表的第一个元素
  for(let i = 0; i < lists.length; i++) {
    // 不为空则加入小顶堆
    if(lists[i] != null) {
      queue.push(lists[i]);
    }
  }
  // 表头
  let newHead = new ListNode(-1);
  let curr = newHead;
  while(!queue.isEmpty()) {
    // 取出最小的元素
    let temp = queue.pop();
    curr.next = temp;
    curr = curr.next;
    // 每次取出链表的后一个元素加入小顶堆
    if(temp.next != null) {
      queue.push(temp.next);
    }
  }
  // 去掉表头
  return newHead.next;
}
module.exports = {
  mergeKLists : mergeKLists
};