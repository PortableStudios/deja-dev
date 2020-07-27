const path = require('path');

module.exports = {
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  setupFilesAfterEnv: [path.resolve(__dirname, './src/jestSetup.ts')],
  moduleNameMapper: {
    '\\.(svg|png)(\\?.*)?$': path.resolve(__dirname, './__mocks__/fileMock.js'),
  },
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/utils/testing/*.{ts,tsx}',
    '!**/src/**/*.stories.{ts,tsx}',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
