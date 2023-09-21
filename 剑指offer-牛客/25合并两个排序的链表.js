/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
function Merge( pHead1 ,  pHead2 ) {
    let newHead = null;
    if(pHead1 == null) return pHead2;
    if(pHead2 == null) return pHead1;
    let p = pHead1;
    let q = pHead2;
    if(p.val < q.val) {
        newHead = p
        p = p.next;
    } else {
        newHead = q
        q = q.next;
    }
    let node = newHead;
    while(p != null && q != null) {
        if(p.val < q.val) {
            newHead.next = p;
            newHead = p;
            p = p.next;
        } else {
            newHead.next = q;
            newHead = q;
            q= q.next;
        }
    }
    // while(p != null) {
    //     newHead.next = p;
    //     newHead = p;
    //     p = p.next;
    // }
    // while(q != null) {
    //     newHead.next = q;
    //     newHead = q;
    //     q= q.next;
    // }
    if(p != null) newHead.next = p;
    if(q != null) newHead.next = q;
    return node;
}

// 递归
function Merge( pHead1 ,  pHead2 ) {
    if(pHead1 == null) return pHead2;
    if(pHead2 == null) return pHead1;
    if(pHead1.val <= pHead2.val) {
        pHead1.next = Merge(pHead1.next, pHead2);
        return pHead1;
    } else {
        pHead2.next = Merge(pHead1, pHead2.next);
        return pHead2;
    }
}