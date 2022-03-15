import { simplifyPath } from '../simplifyPath'

describe('test simplify path', () => {
  test('simplify /path/ = /path', () => {
    const test = simplifyPath('/path/')

    expect(test).toEqual('/path')
  })

  test('simplify path = "/../" = /', () => {
    const test = simplifyPath('/../')

    expect(test).toEqual('/')
  })

  test('path = "/home//foo/" = /home/foo', () => {
    const test = simplifyPath('/home//foo/')
    expect(test).toEqual('/home/foo')
  })

  test('path = ""/a/./b/../../c/"" = /c', () => {
    const test = simplifyPath('/a/./b/../../c/')
    expect(test).toEqual('/c')
  })
})
