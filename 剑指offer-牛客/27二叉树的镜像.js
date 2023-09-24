
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
// 方法一： 递归
function Mirror(pRoot) {
    // 空树返回
    if(pRoot == null) {
        return null;
    }
    let left = Mirror(pRoot.left);
    let right = Mirror(pRoot.right);
    // 交换
    pRoot.left = right;
    pRoot.right = left;
}
// 方法2： 借助栈
function Mirror(pRoot) {
    if(pRoot == null) return null;
    let stack = []
    stack.push(pRoot);
    while(stack.length > 0) {
        let node = stack.pop()
        // 左右结点入栈
        if(node.left != null) {
            stack.push(node.left)
        }
        if(node.right != null) {
            stack.push(node.right)
        }
        // 交换左右结点
        let temp = node.left;
        node.left = node.right;
        node.right = temp
    }
    return pRoot;
}