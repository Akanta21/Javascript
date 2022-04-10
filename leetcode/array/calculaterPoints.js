/**
 * @param {string[]} ops
 * @return {number}
 */
export const calPoints = function (ops) {
  const stack = []
  let result = 0

  for (const num of ops) {
    switch (num) {
      case 'C':
        stack.pop()
        break
      case 'D':
        stack.push(2 * stack[stack.length - 1])
        break
      case '+':
        stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        break
      default:
        stack.push(Number(num))
        break
    }
  }

  console.log(stack)
  for (let i = 0; i < stack.length; i++) {
    result += stack[i]
  }

  return result
}
