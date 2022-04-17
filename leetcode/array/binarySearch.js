/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const search = function (nums, target) {
  let l = 0; let r = nums.length - 1

  while (l < r) {
    const mid = l + Math.floor((r - l + 1) / 2)

    if (target < nums[mid]) {
      r = mid - 1
    } else {
      l = mid
    }
  }

  return nums[r] === target ? r : -1
}
