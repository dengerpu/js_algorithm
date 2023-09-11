
function movingCount(threshold, rows, cols)
{
    let isVitied = Array(rows).fill().map(() => Array(cols).fill(false))
    return dfs(threshold, rows, cols, 0, 0, isVitied)
    
}

function dfs(threshold, rows, cols, x, y, isVitied) {
    if(x < 0 || y < 0 || x >= rows || y >= cols || isVitied[x][y] || cal(x) + cal(y) > threshold) {
        return 0;
    }
    isVitied[x][y] = true
    return 1 + dfs(threshold, rows, cols, x + 1, y, isVitied) 
    + dfs(threshold, rows, cols, x - 1, y, isVitied) 
    + dfs(threshold, rows, cols, x, y + 1, isVitied) 
    + dfs(threshold, rows, cols, x, y - 1, isVitied);
}

function cal(n) {
    let sum = 0;
    while(n != 0) {
        sum += n % 10;
        n = parseInt(n/10);
    }
    return sum;
}
console.log(movingCount(5,10,10))