/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */
// 测试不通过，时间复杂度过高
function InversePairs( nums ) {
  let num = 0;
  for(let i = 0; i < nums.length; i++) {
    for(j = i + 1; j < nums.length; j++) {
      if(nums[j] < nums[i]) {
        num++;
      }
    }
  }
  return num % 1000000007;
}
// 利用归并排序
function InversePairs( nums ) {
  let num = 0;
  if(nums.length < 2) return 0;
  mergeSort(nums, 0, nums.length - 1);
  return num;
  function mergeSort(array, left, right) {
    let mid = left + right >> 1;
    if(left < right) {
      // 左子数组
      mergeSort(array, left, mid);
      // 右子数组
      mergeSort(array, mid + 1, right);
      // 合并
      merge(array, left, mid, right);
    }
  }
  function merge(array, left, mid, right) {
    let arr = Array(right - left + 1);
    let p = 0, l = left, r = mid + 1;
    while(l <= mid && r <= right) {
      if(array[l] < array[r]) {
        arr[p] = array[l];
        p++;
        l++;
      } else {
        arr[p] = array[r];
        // 说明存在逆序对
        num += (mid - l + 1);
        num %= 1000000007;
        p++;
        r++;
      }
    }
    while(l <= mid) {
      arr[p++] = array[l++];
    }
    while(r <= right) {
      arr[p++] = array[r++];
    }
    p = 0;
    for(let i = left; i <= right; i++) {
      array[i] = arr[p++];
    }
  }
}
module.exports = {
  InversePairs : InversePairs
};