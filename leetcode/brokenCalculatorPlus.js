export const brokenCalculatorPlus = (input, outcome) => {
  let count = 0

  while (outcome > input) {
    count++
    if (outcome % 2) {
      outcome = outcome / 2
    } else {
      outcome--
    }
  }

  return count
}
