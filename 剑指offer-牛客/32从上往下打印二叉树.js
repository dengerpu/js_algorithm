function PrintFromTopToBottom(root)
{
    let queue = []
    let result = []
    if (root == null) return result;
    queue.push(root)
    while(queue.length > 0) {
        let node = queue.shift();
        result.push(node.val);
        if(node.left != null) {
            queue.push(node.left);
        }
        if(node.right != null) {
            queue.push(node.right);
        }
    }
    return result
}