const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  modulePaths: ['<rootDir>/src/'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/styles/*'
  ],
  collectCoverage: true
}

module.exports = createJestConfig(customJestConfig)
