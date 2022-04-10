/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = function (nums) {
  function crossSum (nums, left, middle, right) {
    let leftSum = -Infinity; let rightSum = -Infinity

    for (let i = middle - 1, sum = 0; i >= left; i--) {
      leftSum = Math.max(leftSum, sum += nums[i])
    }

    for (let i = middle + 1, sum = 0; i <= right; i++) {
      rightSum = Math.max(rightSum, sum += nums[i])
    }

    console.log(leftSum + rightSum + nums[middle])
    return leftSum + rightSum + nums[middle]
  }

  const findMaxSumInArray = (nums, left, right) => {
    if (right - left <= 1) {
      return nums[left]
    }

    const midPoint = Math.floor((right + left) / 2)

    const leftSum = findMaxSumInArray(nums, left, midPoint - 1)
    const rightSum = findMaxSumInArray(nums, midPoint + 1, right)
    const crossSumVal = crossSum(nums, left, midPoint, right)

    return Math.max(leftSum, rightSum, crossSumVal)
  }

  // const maxSub = (nums, left, right) => {
  //   if (left === right) { return nums[left] } else if (left > right) { return Number.NEGATIVE_INFINITY }

  //   const mid = Math.floor((left + right) / 2)
  //   const lmax = maxSub(nums, left, mid - 1)
  //   const rmax = maxSub(nums, mid + 1, right)

  //   let leftExtendMaxSum = 0; let rightExtendMaxSum = 0
  //   for (let i = mid - 1, tempTotal = 0; i >= left; --i) { leftExtendMaxSum = Math.max(tempTotal += nums[i], leftExtendMaxSum) }

  //   for (let i = mid + 1, tempTotal = 0; i <= right; ++i) { rightExtendMaxSum = Math.max(tempTotal += nums[i], rightExtendMaxSum) }

  //   return Math.max(leftExtendMaxSum + nums[mid] + rightExtendMaxSum, lmax, rmax)
  // }

  return findMaxSumInArray(nums, 0, nums.length - 1)
}
