/**
 * @param {number[]} nums undordered
 * @return {number}
 */
export const removeDuplicates2 = function (nums) {
  nums = nums.sort()

  let idx = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[idx] !== nums[i]) {
      idx++
      nums[idx] = nums[i]
    }
  }

  return nums.splice(0, ++idx)
}
