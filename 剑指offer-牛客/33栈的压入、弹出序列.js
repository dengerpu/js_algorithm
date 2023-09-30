function IsPopOrder( pushV ,  popV ) {
   let stack = []
   let n = pushV.length;
   let j = 0; // 入栈的下标
   for(let i = 0; i < n; i++) {
        // 入栈，栈为空或者栈顶不等于出栈数组
        while(j < n && (stack.length == 0 || stack[stack.length - 1] != popV[i])) {
            stack.push(pushV[j]);
            j++;
        }
        // 栈顶等于出栈数组
        if(stack[stack.length - 1] == popV[i]) {
            stack.pop();
        } else { 
            // 序列不匹配
            return false;
        }
   }
   return true;
}