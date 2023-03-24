module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: [
    'node_modules',
    'dist',
    'build',
    'coverage',
    'src/migrations',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
