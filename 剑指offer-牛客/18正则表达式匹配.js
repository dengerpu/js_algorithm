function match2( str ,  pattern ) {
    // write code here
    let queue = str.split("");
    let i = 0;
    for(i = 0; i < pattern.length; i++) {
        if(pattern[i] == '.') {
            if (i < pattern.length && pattern[i+1] == '*') { 
                queue = [];
                if(i + 1 == pattern.length - 1) {
                    return true;
                }
                break;
            }else {
                if(queue.length > 0) {
                    queue.shift()
                }else {
                    return false
                }
            } 
        }else if(i >= 1 && pattern[i] == '*') {
            while(queue.length > 0 && queue[0] == pattern[i-1]) {
                queue.shift()
            }
        }else {
            if(queue.length > 0 && pattern[i] == queue[0]) {
                queue.shift()
            }
        }
    }
    if(queue.length == 0 && i == pattern.length) return true
    return false;
}

// 动态规划
function match( str ,  pattern ) {
    let strLen = str.length, patternLen = pattern.length;
    // 定义状态，并初始化
    let dp = Array(strLen).fill().map(() => Array(patternLen).fill(false));
    dp[0][0] = true;
    // 初始化首行
    for(let j = 2; j < patternLen; j++) {
        // 因为pattern[j-1]的*可以取任意值包括空值，因此dp[0][j]相当于取决于dp[0][j-2]
        if(pattern[j - 1] == '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    // 状态转移
    for(let i = 1; i < strLen; i++) {
        for(let j = 1; j < patternLen; j++) {
            // 当比较的位pattern[j-1] == '.' 或者字符相等匹配，则状态取决于上一次的状态
            if(pattern[j-1] == '.' || str[i-1] == pattern[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } 
        }
    }

}

console.log(match("aaa","a*a"))
console.log(match("aad","c*a*d"))
console.log(match("a",".*"))
console.log(match("aaab","a*a*a*c"))
console.log(match("a","a."))
console.log(match("a",".*a")) // 这个有误