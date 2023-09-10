function hasPath( matrix ,  word ) {
    let words = word.split("")
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(dfs(matrix, words, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}

function dfs(matrix, word, x, y, index) {

    // 越界或者不相等，直接返回false
    if(x >= matrix.length || x < 0 || y >= matrix[0].length || y < 0 || matrix[x][y] != word[index]) {
        return false;
    }
    // 说明已经遍历完
    if(index == word.length - 1) {
        return true;
    }
    let temp = matrix[x][y];
    matrix[x][y] = '.'; // 代表matrix[x][y] 已经遍历过了
    let res = dfs(matrix, word, x + 1, y, index + 1) || dfs(matrix, word, x - 1, y, index + 1)
    || dfs(matrix, word, x, y + 1, index + 1) || dfs(matrix, word, x, y - 1, index + 1);
    matrix[x][y] = temp
    return res; 
}

let arr = [['a','b','c','e'],['s','f','c','s'],['a','d','e','e']], word = "abcced";
console.log(hasPath(arr, word))