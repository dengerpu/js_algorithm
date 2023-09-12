// 排列组合
function cutRope(number)
{
    
    let path = []
    let result = []
    backTracking(number, 0, 0, path);
    return Math.max.apply(null, result);

    // 回溯
    function backTracking(number, item, sum, path) {
        if(sum == number) {
            if(path.length > 1) {
                result.push(cal(path));
            } else {
                path = []
            }
            return;
        }
        for(let i = 1; i <= number - sum; i++) {
            if(i + sum <= number) {
                path.push(i);
                sum += i;
                backTracking(number, i, sum, path);
                sum -= i;
                path.pop();
            }
        }
    }

    function cal(arr) {
        let sum = 1;
        arr.forEach(item => {
            sum *= item;
        })
        return sum;
    }  
}

// 回溯算法运行会超时
// console.log(cutRope(8));

// 动态规划
function cutRope2(number) {
    if(number <= 3) {
        return number - 1;
    }
    let dp = new Array(number + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    dp[4] = 4;
    for(let i = 5; i <= number; i++) {
        for(let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * dp[i - j]);
        }
    }
    return dp[number];
}

// 贪心算法
function cutRope3(number) {
    if(number <= 3) {
        return number - 1
    }
    let res = 1
    while(number > 4) {
        res *= 3;
        number -= 3;
    }
    return res * number
}
console.log(cutRope2(57))