function NumberOf1( n ) {
    let count = 0;
    for(let i = 0; i < 32; i++) {
        // n = n >> i  提交有误
        // if(n & 1) {
        //     count ++;
        // }
        if((n & (1 << i)) != 0){
            count++;
        }
    } 
    return count;
}
// 方法二
function NumberOf2( n ) {
    let count = 0;
    while(n != 0) {
        n &= (n-1)
        count++
    }
    return count;
}
console.log(NumberOf1(10))