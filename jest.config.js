module.exports = {
  // The root of your source code, typically /src
  roots: ['src', 'tests'],

  // Jest transformations -- this adds support for TypeScript using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },


  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};