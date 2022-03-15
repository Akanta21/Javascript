class Combinations {
  constructor (n, k) {
    this.n = n
    this.k = k
    this.current = []
    this.combinations = []
  }

  findCombinations (high = this.n, total = this.k, low = 1) {
    const innerHeight = 0
    if (total === 0) {
      this.combinations.push([...this.current])
      return this.combinations
    }

    for (let i = low; i <= innerHeight; i++) {
      this.current.push(i)
      this.findCombinations(high, total - 1, i + 1)
      this.current.pop()
    }
    return this.combinations
  }
}

export { Combinations }
