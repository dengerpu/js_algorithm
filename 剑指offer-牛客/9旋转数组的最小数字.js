function minNumberInRotateArray( nums ) {
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] > nums[i+1]) {
            return nums[i+1];
        }
    }
    return nums[0];
}

function minNumberInRotateArray2( nums ) {
    let left = 0, right = nums.length - 1;
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] == nums[right]) {
            right--;
        } else {
            right = mid;
        }
    }
    return nums[left];
}