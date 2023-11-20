/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */
function minNumberInRotateArray( nums ) {
  // write code here
  let left = 0, right = nums.length - 1;
  while(left < right) {
    // 中间点m
    let mid = left + right >> 1;
     // mid在左排序数组中，旋转点在 [m+1, right] 中
    if(nums[mid] > nums[right]) { // 说明最小值在右边
      left = mid + 1;
    } else if(nums[mid] < nums[right]){
      // mid在右排序数组中，旋转点在[left, mid]中
      right = mid; 
    } else {
      right--;
    }
  }
  return left;
}
module.exports = {
  minNumberInRotateArray : minNumberInRotateArray
};