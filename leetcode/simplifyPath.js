export const simplifyPath = (path) => {
  const stack = []

  path.split('/').forEach((val) => {
    switch (val) {
      case '':
        break
      case '.':
        break
      case '..':
        stack.pop()
        break
      default:
        stack.push(val)
    }
  })

  return '/' + stack.join('/')
}
