
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param preOrder int整型一维数组 
 * @param vinOrder int整型一维数组 
 * @return TreeNode类
 */
 function reConstructBinaryTree( preOrder ,  vinOrder ) {
    if(!preOrder.length||!vinOrder.length){
        return null;
    }
    // 前序第一个元素就是根元素
    let rootVal = preOrder.shift();
    let root = new TreeNode(rootVal);
    let index = vinOrder.indexOf(rootVal)
    root.left = reConstructBinaryTree(preOrder, vinOrder.slice(0, index))
    root.right = reConstructBinaryTree(preOrder, vinOrder.slice(index + 1))
    return root
}