//jest.config.js
module.exports = {
    preset: 'ts-jest',
    runner: 'jest-electron/runner',
    testEnvironment: 'jest-electron/environment',
    setupFiles: ['./dist/main.js','construct-style-sheets-polyfill'],
};