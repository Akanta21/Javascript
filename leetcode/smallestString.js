/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
export const getSmallestString = function (n, k) {
//    const alpArr = [
//        'a',
//        'b',
//        'c',
//        'd',
//        'e',
//        'f',
//        'g',
//        'h',
//        'i',
//        'j',
//        'k',
//        'l',
//        'm',
//        'n',
//        'o',
//        'p',
//        'q',
//        'r',
//        's',
//        't',
//        'u',
//        'v',
//        'w',
//        'x',
//        'y',
//        'z'
//    ]

  //    let s = '';
  //    let sum = 0;

  //    for(let i = n-1; i >= 0; i--) {
  //         let target = (k - i) - sum

  //         if(target > 26) target = 26
  //         sum += target;

  //         s = alpArr[target - 1] + s
  //    }

  //    return s

  k -= n
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  let ans = 'z'.repeat(Math.floor(k / 25))

  if (k % 25) {
    ans = alpha[k % 25] + ans
  }

  return ans.padStart(n, 'a')
}
