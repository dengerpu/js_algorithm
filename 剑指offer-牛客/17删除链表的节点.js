function ListNode(x) {
    this.val = x;
    this.next = null;
}


function deleteNode(head, val) {
    // write code here
    if(head.val == val) return head.next;
    let p = head;
    let q = head.next;
    while(q != null) {
      if(q.val == val) {
        if(q.next) {
            p.next = q.next
        } else {
            p.next = null
        }
        break;
      }
      p = q;
      q = q.next;
    }
    
}

function deleteNode2(head, val) {
    if(head.val == val) return head.next;
    let curr = head;
    let prev = null;
    while(curr.val != val) {
        prev = curr;
        curr = curr.next
    }
    prev.next = curr.next;
    return head;
}