import { partitionLabels } from '../partitionLabels'

describe('partitionLabels', () => {
  test('partition', () => {
    const str = 'ababcbacadefegdehijhklij'
    const output = [9, 7, 8]
    const testing = partitionLabels(str)

    expect(testing).toEqual(output)
  })
})
