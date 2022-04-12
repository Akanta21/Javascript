export const myAtoi = function (s) {
  const max = Math.pow(2, 31) - 1; const min = -Math.pow(2, 31)

  const result = Number(s.trimLeft().match(/^[-+]?\d+/))

  console.log(result)

  if (result < min) return min
  if (result > max) return max

  return result
  // s = s.trim()

  // let direction = 1, i = 0, max = Math.pow(2, 31) - 1, min = -Math.pow(2, 31), sum = 0;

  // if(s[i] === '+' || s[i] === '-'){
  //     direction = s[i] === '+' ? 1 : -1;
  //     i++;
  // }

  // while(s[i] && s[i].charCodeAt(0) - 48 >= 0 && s[i].charCodeAt(0) - 48 <= 9){
  //     sum = sum * 10 + s[i].charCodeAt(0) - 48;
  //     i++
  // }

  // sum = sum * direction;
  // return sum <= min ? min : sum >= max ? max : sum;
}
