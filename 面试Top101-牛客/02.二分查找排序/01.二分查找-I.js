/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @param target int整型 
 * @return int整型
 */
function search( nums ,  target ) {
  let left = 0, right = nums.length - 1;
  while(left <= right) {
    let mid =(left + right) >> 1;
    if(nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target){
      left = mid + 1; 
    } else {
      return mid;
    }
  }
  return -1;
}
const nums = [-1,0,3,4,6,10,13,14]
const target = 13
console.log(search(nums, target))
module.exports = {
  search : search
};