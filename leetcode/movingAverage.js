export const movingAverage = (input, window) => {
  const stack = []
  let sum = 0

  for (let i = 0; i < input.length; i++) {
    if (i <= window - 1) {
      sum += input[i]
    } else {
      sum = sum - input[i - window] + input[i]
    }

    if (i >= window - 1) {
      stack.push(sum / window)
    }
  }

  return stack
}
