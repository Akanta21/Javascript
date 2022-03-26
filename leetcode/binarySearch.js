export const binarySearch = (nums, target) => {
  let lo = 0; let high = nums.length - 1

  while (lo < high) {
    const mid = lo + Math.floor((high - lo + 1) / 2)
    if (target < nums[mid]) {
      high = mid - 1
    } else {
      lo = mid
    }
  }

  return nums[high] === target ? high : -1
}
