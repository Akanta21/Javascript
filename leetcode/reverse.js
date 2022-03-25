export const reverse = function (x) {
  const isNeg = x < 0
  x = Math.abs(x)

  if (x > Math.pow(2, 31)) {
    return 0
  }

  let ret = 0
  while (x > 0) {
    const num = x % 10
    x = Math.floor(x / 10)

    ret *= 10
    ret += num
  }

  return isNeg ? ret * -1 : ret

  // const isNegative = x < 0

  // x = Math.abs(x).toString().split('');

  // let num = '';

  // if(x[0] === '-') {
  //     num += '-'
  //     x = x.shift()
  // }

  // for(let i = x.length -1; i >= 0; i--){
  //     num += x[i]
  // }

  // const res = parseInt(num)

  // return res > Math.pow(2, 31) ? 0 : isNegative ? res * -1 : res
}
