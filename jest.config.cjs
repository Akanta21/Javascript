module.exports = async () => {
  return {
    rootDir: './',
    verbose: true,
    coverageDirectory: '<rootDir>/leetcode',
    testMatch: [
      '<rootDir>/leetcode/**/*.test.js'
    ]
  }
}
