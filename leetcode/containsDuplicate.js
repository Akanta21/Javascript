export const containsDuplicate = (nums) => {
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      return true
    }
  }

  return false
}
