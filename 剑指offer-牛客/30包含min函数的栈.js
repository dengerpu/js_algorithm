let stack = [] // 原始栈
let minStack = [] // 最小栈
function push(node)
{
    if(stack.length == 0) {
        minStack.push(node)
    } else {
        // 如果比前一个数值小。就把这个数压入最小栈中
        // 否则就把上一个值压入最小栈
        let prev = minStack[minStack.length - 1]
        if(node <= prev) {
            minStack.push(node)
        } else {
            minStack.push(prev)
        }
    }
    stack.push(node)
}
function pop()
{
    if(stack.length == 0) {
        return null
    } else {
        minStack.pop()
        let ret = stack.pop()
        return ret;
    }
}
function top()
{
    let n = stack.length;
    if (n == 0) {
        return null
    } else {
        return stack[n-1];
    }
}
function min()
{
    let ret = minStack[minStack.length - 1];
    return ret;
}
module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};