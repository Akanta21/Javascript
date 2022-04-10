import { minRemoveToMakeValid } from '../minToMakeValid'

describe('test minToMakeValid', () => {
  test('"lee(t(c)o)de)" returns lee(t(c)o)de', () => {
    const test = minRemoveToMakeValid('lee(t(c)o)de)')

    expect(test).toEqual('lee(t(c)o)de')
  })

  test('"))((" returns lee(t(c)o)de', () => {
    const test = minRemoveToMakeValid('))((')

    expect(test).toEqual('')
  })
})
