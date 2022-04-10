const countBits = (n) => {
  const baseCase = [0]

  for (let i = 1; i <= n; i++) {
    const half = parseInt(i / 2)
    console.log('half--', half)
    console.log('half', baseCase[half])
    console.log((i & 1))
    baseCase.push(baseCase[half] + (i & 1))

    //    001 -> 1             00000000001 -> 1
    //    010 -> 2             00000000010 -> 1
    //    011 -> 3             00000000011 -> 2
    //    100 -> 4             00000000100 -> 1
    //    101 -> 5             00000000101 -> 2
    //    110 -> 6             00000000110 -> 2
    //    111 -> 7             00000000111 -> 3
    //    1000 -> 8            00000001000 -> 1
    //    1001 -> 9            00000001001 -> 2
    //    1010 -> 10           00000001010 -> 2
    //    1011 -> 11           00000001011 -> 3
    //    1100 -> 12           00000001100 -> 2
  }

  return baseCase
}

export { countBits }
