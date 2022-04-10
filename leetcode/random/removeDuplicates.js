/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = function (nums) {
  let idx = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[idx]) {
      idx++
      nums[idx] = nums[i]
    }
  }

  return ++idx
}
