module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js}',
    '!<rootDir>/src/types/**',
    '!<rootDir>/node_modules/',
    '!<rootDir>/*.js',
  ],
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/config.*.js'],
  transform: {
    '^.+\\.ts$': ['ts-jest', {tsconfig: '<rootDir>/test/tsconfig.json'}]
  }
};