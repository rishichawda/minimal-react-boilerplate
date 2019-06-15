module.exports = {
  linters: {
    '*.{js,jsx}': ['eslint'],
    '*.+(json|yml|yaml|css|less|scss|md|mdx)': ['prettier --write', 'git add'],
  },
}
