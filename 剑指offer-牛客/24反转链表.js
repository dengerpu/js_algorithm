// 方法一：借助栈
function ReverseList( head ) {
    let stack = [];
    let p = head;
    while(p != null) {
        stack.push(p);
        p = p.next;
    }
    if(stack.length > 0) {
        p = stack.pop();
    } else {
        return null;
    }
    let prevNode = p;
    while(stack.length > 0) {
        let temp = stack.pop();
        prevNode.next = temp;
        prevNode = temp;
    }
    // 最后一个结点的下一个要置空（关键）这个是头节点，否则会造成环
    prevNode.next = null;
    return p;
}
// 方法二：新建一个链表
function ReverseList( head ) {
    let newHead = null;
    while(head != null) {
        let temp = head.next;
        head.next = newHead;
        newHead = head;
        head = temp;
    }
    return newHead;
}

// 方法三：递归调用
function ReverseList( head ) {
    return reverse(null, head);
}
function reverse(prev, cur) {
    if (cur == null) return prev;
    let temp = cur.next;
    cur.next = prev;
    return reverse(cur, temp);
}

// 方法四：双指针法
function ReverseList( head ) {
    let cur = head;
    let prev = null;
    while(cur != null){
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
}