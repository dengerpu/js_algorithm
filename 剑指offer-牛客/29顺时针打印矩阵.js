function printMatrix(matrix){
    let arr = []
    if(matrix.length == 0) {
        return arr;
    }
    let left = 0;// 左边界
    let right = matrix[0].length - 1; // 右边界
    let up = 0; // 上边界
    let down = matrix.length - 1; // 下边界

    while(left <= right && up <= down) {
        // 边界从左往右移动
        for(let i = left; i<= right; i++) {
            arr.push(matrix[up][i]);
        }
        up++;
        if(up > down) break;
        // 右边界从上往下
        for(let i = up; i <= down; i++) {
            arr.push(matrix[i][right]);
        }
        right--;
        if(left > right) break;
        // 下边界从右往左
        for(let i = right; i >= left; i--) {
            arr.push(matrix[down][i]);
        }
        down--;
        if(up > down) break;
        // 左边界行下往上
        for(let i = down; i >= up; i--) {
            arr.push(matrix[i][left]);
        }
        left++;
        if(left > right) break;
    }
    return arr;
}