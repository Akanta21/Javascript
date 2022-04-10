/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = function (nums) {
  const sumArr = []
  if (nums.length < 3) {
    return sumArr
  }

  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      } else {
        console.log('am i here', `${nums[i]}-${nums[left]}-${nums[right]}`)
        sumArr.push([nums[i], nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) left++
        while (nums[right] === nums[right - 1]) right--
        left++
        right--
      }
    }
  }

  console.log('sumArr', sumArr)

  return sumArr
}
