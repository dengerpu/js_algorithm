function HasSubtree(pRoot1, pRoot2)
{
    // 空树
    if(pRoot2 == null ) {
        return false;
    }
    // 一个为空另一个不为空
    if(pRoot1 == null && pRoot2 != null) {
        return false
    }
    if(pRoot1 == null && pRoot2 == null) {
        return true;
    }
    let flag1 = dfs(pRoot1, pRoot2)
    // 递归树1的每个节点
    let flag2 = HasSubtree(pRoot1.left, pRoot2)
    let flag3 = HasSubtree(pRoot1.right, pRoot2)
    return flag1 || flag2 || flag3;
}

function dfs(node1, node2) {
    // 当一个节点存在，另一个不存在时
    if(node1 == null && node2 != null) {
        return false;
    }
    // 两个都为空则返回
    if(node1 == null || node2 == null) {
        return true;
    }
    if(node1.val != node2.val) {
        return false;
    }
    // 递归比较子树
    return dfs(node1.left, node2.left) && dfs(node1.right, node2.right)
}