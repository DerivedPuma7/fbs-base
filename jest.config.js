/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
*/

/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/test/$1',
    '@/(.+)': '<rootDir>/src/$1',
  },
  roots: [
    '<rootDir>/src',
    '<rootDir>/test'
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  }
};

module.exports = config;
