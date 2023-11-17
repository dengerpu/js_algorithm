/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */
function findPeakElement( nums ) {
  if(nums.length == 1) return 0;
  // 这种考虑不到第一个和最后一个
  for(let i = 1; i < nums.length - 1; i++) {
    if(nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      return i;
    }
  }
  // 对第一个和最后一个进行单独考虑
  if(nums[0] > nums[1]) {
    return 0;
  }
  if(nums[nums.length - 1] > nums[nums.length - 1 -1]) {
    return nums.length - 1;
  }
  return -1;
}

function findPeakElement( nums ) {
  let left = 0, right = nums.length - 1;
  while(left < right) {
    let mid  = (left + right) >> 1;
    if(nums[mid] > nums[mid + 1]) { // 右边是下降趋势，说明往右边不一定存在峰值
      right = mid;
    } else {
      left = mid + 1; // 右边是上升趋势,一定存在峰值
    }
  }
  return right;
}
module.exports = {
  findPeakElement : findPeakElement
};