/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays = function (nums1, nums2) {
  const totalLength = nums1.length + nums2.length

  const mid = totalLength / 2 + 1 | 0

  let i = 0; let j = 0; let k = 0; let last; let beforeLast

  while (i < mid) {
    console.log(j)
    console.log('last', last)
    console.log(k)
    beforeLast = last
    i++
    console.log(nums1[j])
    last = nums1[j] < (nums2[k] ?? Infinity) ? nums1[j++] : nums2[k++] // need to use Infinity in the case when nums2[k] undefined
  }

  console.log('last', last)
  console.log('b', beforeLast)
  console.log((last + beforeLast) / 2.0)

  return totalLength % 2 === 1 ? last : (last + beforeLast) / 2.0
}
