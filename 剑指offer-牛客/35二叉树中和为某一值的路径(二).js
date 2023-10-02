var result = []
var path = []
function FindPath( root ,  target ) {
    if(root == null) return result
    dfs(root, target);
    return result;
}
function dfs(root, target) {
    if(root == null) return;
    // 路径更新
    path.push(root.val);
    target -= root.val
    //  如果递归当前节点为叶子节点且该条路径的值已经达到了expectNumber，则更新ret
    if(root.left == null && root.right == null && target == 0) {
        result.push(path.slice())
    }
    dfs(root.left, target);
    dfs(root.right, target);
    path.pop();
}
