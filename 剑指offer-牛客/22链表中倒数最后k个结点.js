
function ListNode(x){
   this.val = x;
   this.next = null;
}
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
 function FindKthToTail( pHead ,  k ) {
    let slow = pHead, fast = pHead;
    let i = 0;
    while(i < k) {
        if(fast != null) {
            fast = fast.next;
        } else {
            return slow = null
        }
        
        i++;
    }
    while(fast != null) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;

}
module.exports = {
    FindKthToTail : FindKthToTail
};