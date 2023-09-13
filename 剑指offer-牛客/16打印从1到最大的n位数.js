function printNumbers( n ) {
    let arr = []
    for(let i = 1; i < Math.pow(10, n); i++) {
        arr.push(i);
    }
    return arr
}
console.log(printNumbers(3))