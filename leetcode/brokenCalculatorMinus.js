export const brokenCalculatorMinus = (input, outcome) => {
  let count = 0

  while (outcome > input) {
    count++
    if (outcome % 2 === 1) outcome++
    else outcome = outcome / 2
  }

  return count + input - outcome
}
