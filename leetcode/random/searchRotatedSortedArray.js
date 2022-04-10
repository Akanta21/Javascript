export const search = function (nums, target) {
  // const midPoint = Math.floor(nums.length / 2);

  // for(let i = 0; i <= midPoint; i++) {
  //     if(nums[i] === target) {
  //         return true;
  //     }
  // }

  // for(let i = midPoint + 1; i < nums.length; i++){
  //     if(nums[i] === target) {
  //         return true
  //     }
  // }

  let start = 0; let last = nums.length - 1

  while (start <= last) {
    const mid = start + Math.floor((last - start) / 2)

    if (nums[mid] === target) return true
    if (nums[mid] > nums[start]) {
      if (nums[mid] > target && nums[start] < target) last = mid - 1
      else start = mid + 1
    }
    if (nums[mid] < nums[start]) {
      if (nums[mid] < target && nums[start] > target) start = mid + 1
      else last = mid - 1
    } else {
      start++
    }
  }

  return false
}
