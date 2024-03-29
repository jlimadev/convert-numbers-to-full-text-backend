module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  modulePathIgnorePatterns: ['<rootDir>/coverage/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/coverage/', '<rootDir>/dist/'],
  testMatch: ['<rootDir>/**/*.spec.ts', '<rootDir>/**/*.test.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/coverage/', '<rootDir>/dist/'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/coverage/', '<rootDir>/dist/'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.ts',
    '!**/jest.config.js',
    '!**/server.ts',
    '!**/index.ts',
    '!**/src/main/**',
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
