// 递归写法
function Fibonacci( n ) {
    if(n == 1 || n == 2) return 1
    else return Fibonacci(n - 1) + Fibonacci(n - 2)
}

// 迭代
function Fibonacci2( n ) {
    if(n == 1 || n == 2) return 1;
    let dp = new Array(n + 1).fill(0);
    dp[0] = 0; dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
console.log(Fibonacci2(5));
