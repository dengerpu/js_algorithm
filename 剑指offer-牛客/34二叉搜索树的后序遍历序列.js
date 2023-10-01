function VerifySquenceOfBST(sequence)
{
    if(sequence.length == 0) return false;
    return check(sequence, 0, sequence.length - 1);
}

function check(arr, l, r) {
    if(l >= r) return true;
    // 根结点
    let root = arr[r];
    // 寻找右子树区间, 二叉搜索树（左《 中 《 右）
    let j = r - 1;
    while(j >= 0 && arr[j] > root) {
        j--;
    }
    
    // 左区间 (如果左子树存在大于根的元素，就不是二叉搜索树)
    for(let i = l; i <= j; i++) {
        if(arr[i] > root) return false;
    }

    return check(arr, l, j) && check(arr, j + 1, r - 1);
}


// 借助栈
function VerifySquenceOfBST(sequence)
{
    if(sequence.length == 0) return false;
    let inorder = sequence.slice();
    inorder = inorder.sort((a,b) => a-b)
    return check(inorder, sequence);
}
/**
 * 
 * @param {*} pushV 中序遍历序列
 * @param {*} popV 后序遍历序列
 */
function check(pushV, popV) {
    let n = popV.length;
    let stack = []
    let i = 0, j = 0;
    while(i < n) {
        stack.push(pushV[i]);
        while(stack.length > 0 && stack[stack.length - 1] == popV[j]) {
            j++;
            stack.pop();
        }
        i++;
    }
    return j == n;
}