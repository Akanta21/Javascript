/**
 * @param {string} s
 * @return {string}
 */
export const minRemoveToMakeValid = function (s) {
  const str = s.split('')
  const stack = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i)
    } else if (str[i] === ')') {
      if (stack.length > 0) {
        stack.pop()
      } else {
        str[i] = ''
      }
    }
  }

  for (const i of stack) {
    console.log('i', i)
    str[i] = ''
  };

  return str.join('')
}
