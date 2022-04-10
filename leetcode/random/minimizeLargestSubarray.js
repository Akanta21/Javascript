function fitSubarray (nums, mid, size) {
  let subArray = 1
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    console.log(`mid: ${mid}- sum: ${sum}`)
    if (sum > mid) {
      subArray++
      sum = nums[i]
    }
  }
  return subArray <= size
}

export const minimizeLargestSubarray = (nums, size) => {
  let min = Math.max(...nums)
  let max = nums.reduce((sum, b) => {
    sum += b
    return sum
  }, 0)
  let ans = 0

  while (min <= max) {
    const mid = Math.floor(min + (max - min) / 2)
    console.log(`${min}-${max}`)
    if (fitSubarray(nums, mid, size)) {
      ans = mid
      max = mid - 1
    } else {
      min = mid + 1
    }
  }

  return ans
}
