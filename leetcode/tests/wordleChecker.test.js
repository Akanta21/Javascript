import { wordleCheck } from '../wordleChecker'

describe('wordleChecker', () => {
  test('wordleCheck("temple", "basket")', () => {
    const test = wordleCheck('temple', 'basket')

    expect(test).toEqual('##----')
  })

  test('wordleCheck("peace", "maple")', () => {
    const test = wordleCheck('peace', 'maple')

    expect(test).toEqual('#-#-+')
  })

  test('wordleCheck("apple", "maple")', () => {
    const test = wordleCheck('apple', 'maple')

    expect(test).toEqual('#-+++')
  })

  test('wordleCheck("apple", "maple")', () => {
    const test = wordleCheck('apple', 'maple')

    expect(test).toEqual('#-+++')
  })

  test('wordleCheck("appble", "bmaple")', () => {
    const test = wordleCheck('appble', 'bmaple')

    expect(test).toEqual('##-#++')
  })

  test('wordleCheck("pple", "maple")', () => {
    expect(() => wordleCheck('pple', 'maple')).toThrow('Unable to process')
  })
})
