module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'next',
    'plugin:react/recommended',
    'standard',
    'prettier',
    'next/core-web-vitals'
  ],
  overrides: [
  ],
  settings: {
    next: {
      rootDir: 'packages/my-app/'
    }
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off'
  },
  plugins: [
    'react'
  ]
}
