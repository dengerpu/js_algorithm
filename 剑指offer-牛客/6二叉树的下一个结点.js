const { arrayBuffer } = require("stream/consumers");

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
// 方法一：递归求出中序遍历序列
var arr = []
function GetNext(pNode)
{
    // 找到根节点
    let root = pNode 
    while(root.next !== null) {
        root = root.next
    }
    df(root)
    let index = arr.indexOf(pNode)
    return arr[index + 1]
}
function df(pNode) {
    if(pNode == null) return
    df(pNode.left)
    arr.push(pNode)
    df(pNode.right)
}
module.exports = {
    GetNext : GetNext
};