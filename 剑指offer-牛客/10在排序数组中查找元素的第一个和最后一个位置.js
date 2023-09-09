// 寻找左区间
var searchRange1 = function(nums, target) {
    let left = 0, right  = nums.length;
    while(left < right) {
        let mid = (left + right) >> 1;
        if(nums[mid] > target) {
            right = mid;
        } else if (nusm[mid] < target) {
            left = mid + 1;
        } else { // 相等的情况
            right = mid;
        }
    }
    if (left == nums.length) return -1;
    return nums[left] == target ? left : -1;
};
// 寻找右区间
var searchRange2 = function(nums, target) {
    let left = 0, right  = nums.length;
    while(left < right) {
        let mid = (left + right) >> 1;
        if(nums[mid] > target) {
            right = mid;
        } else if (nusm[mid] < target) {
            left = mid + 1;
        } else { // 相等的情况
            left = mid + 1;
        }
    }
    if (left == nums.length) return -1;
    return nums[left - 1] == target ? left - 1 : -1;
};