// 第一种做法，借助一个辅助数组
// 第二种做法，利用插入排序的思想
function reOrderArray( array ) {
    if(array && array.length == 0) return array;
    let j = 0;
    let temp = 0;
    for(let i = 0; i < array.length; i++) {
        let temp = array[i];
        if(array[i] % 2 == 0) { // 偶数跳过
            continue;
        } else { // 奇数
            let k = i;
            while(k > j) {
                // 整体向后移动一位
                array[k] = array[k - 1];
                k--;
            }
            array[k] = temp;
            j++;
        }
    }
    return array;
}
let arr = [1,2,3,4]
console.log(reOrderArray(arr))