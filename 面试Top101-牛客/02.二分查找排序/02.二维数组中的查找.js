/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param target int整型 
 * @param array int整型二维数组 
 * @return bool布尔型
 */
// 从下往上线性搜索
function Find( target ,  array ) {
  let m = array.length;
  let n = array[0].length;
  let right = 0, up = m - 1; // 向右和向上走
  while(right < n && up >= 0) {
    let temp = array[up][right];
    if(temp == target) {
      return true;
    } else if (temp < target) {
      right++;
    } else {
      up--;
    }
  }
  return false;
} 
module.exports = {
  Find : Find
};