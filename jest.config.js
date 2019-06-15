module.exports = {
  verbose: true,
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/*.test.{js,jsx}'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
}
