 // 递归实现
function isSymmetrical( pRoot ) {
    // write code here
    return symmetrical(pRoot, pRoot)
}
function symmetrical(root1, root2) {
    // 可以两个都为空
    if(root1 == null && root2 == null) {
        return true;
    } 
    // 有一个为空，必不对称
    if (root1 == null || root2 == null) {
        return false;
    } 
    if (root1.val != root2.val) {
        return false;
    }
    return symmetrical(root1.left, root2.right) && symmetrical(root1.right, root2.left); 
}


// 层次遍历
function isSymmetrical( pRoot ) {
    // 存储从左往右遍历的结果
    let queue1 = []
    // 存储从右往左遍历的结果
    let queue2 = []
    if(pRoot == null) return true;
    let p1 = p2 = pRoot;
    queue1.push(p1);
    queue2.push(p2);
    while(queue1.length > 0 && queue2.length > 0) {
        p1 = queue1.shift()
        p2 = queue2.shift()
        // 都为空暂时对称
        if(p1 == null && p2 == null) 
            continue
        if(p1 == null || p2 == null || p1.val != p2.val) {
            return false;
        }
        queue1.push(p1.left);
        queue1.push(p1.right);
        queue2.push(p2.right);
        queue2.push(p2.left);
    }
    return true;
}