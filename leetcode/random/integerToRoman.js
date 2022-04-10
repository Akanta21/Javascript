const IntegerToRomanMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

export const integerToRoman = (integerNum) => {
  let str = ''

  if (integerNum <= 0) {
    return str
  }

  let startAmt = integerNum

  Object.entries(IntegerToRomanMap).forEach(([roman, val]) => {
    str += roman.repeat(Math.floor(startAmt / val))
    startAmt %= val
  })

  return str

  // const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  // return Object.entries(map).reduce((result, [letter, n]) => {
  //     result += letter.repeat(Math.floor(integerNum / n));
  //     integerNum %= n;
  //     return result;
  // }, '');
}
