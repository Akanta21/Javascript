import Graph from './NodeNeighbours'

describe('test', () => {
  test('i am graph', () => {
    const graph = new Graph()

    graph.addEdge('SGD', 'JPY')
    graph.addEdge('JPY', 'CNH')
    graph.addEdge('SGD', 'BCH')
    graph.addEdge('MYR', 'SGD')

    const expected = new Set()
    expected.add('JPY')
    expected.add('BCH')
    expected.add('MYR')

    expect(graph.nodeNeighbours('SGD')).toEqual(expected)
  })
})
