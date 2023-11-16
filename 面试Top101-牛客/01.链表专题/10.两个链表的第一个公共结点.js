/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
  let p = pHead1;
  let q = pHead2;
  while(p != q) {
    p == null ? p = pHead2 : p = p.next;
    q == null ? q = pHead1 : q = q.next;
  }
  return p; // 最后如果不存在公共结点都会等于null然后退出while循环
}
module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};