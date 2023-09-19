function ListNode(x){
    this.val = x;
    this.next = null;
}
function EntryNodeOfLoop(pHead)
{
    let slow = pHead;
    let fast = pHead;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            let index1 = pHead;
            let index2 = fast;
            while(index1 != index2) {
                index1 = index1.next;
                index2= index2.next;
            }
            return index2;
        }
    }
    return null;
}