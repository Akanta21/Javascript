/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export const topKFrequent = function (nums, k) {
  const hMap = new Map()
  const stack = []
  const result = []

  for (let i = 0; i < nums.length; i++) {
    hMap.set(nums[i], (hMap.get(nums[i]) || 0) + 1)
  }

  console.log('hMap', hMap)

  for (const [key, freq] of hMap) {
    stack[freq] = (stack[freq] || new Set()).add(key)
  }

  console.log(stack)

  for (let i = stack.length - 1; i > 0; i--) {
    if (stack[i]) result.push(...stack[i])
    if (i === k) break
  }

  return result
}
