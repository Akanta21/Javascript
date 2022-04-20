export default class Graph {
  constructor () {
    this.edges = []
  }

  addEdge (node1, node2) {
    console.log('node1', node1)
    this.edges.push({ node1, node2 })
  }

  nodeNeighbours (node) {
    const neighbours = new Set()
    // Returns an array with all of the node neighbors
    for (const edge of this.edges) {
      if (edge.node1 === node && !neighbours.has(edge.node2)) {
        neighbours.add(edge.node2)
      } else if (edge.node2 === node && !neighbours.has(edge.node1)) {
        neighbours.add(edge.node1)
      }
    }
    return neighbours
  }
}
