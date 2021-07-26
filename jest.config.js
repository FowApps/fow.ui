// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    collectCoverage: true,
    coverageReporters: ['html', 'lcov', 'text'],

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: [
        'src/**/*.{js,jsx,mjs,ts,tsx}',
        '!src/**/*.stories.{js,jsx,mjs,ts,tsx}',
    ],

    // The directory where Jest should output its coverage files
    // coverageDirectory: 'coverage',

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    testPathIgnorePatterns: ['/node_modules'],

    // Indicates whether each individual test should be reported during the run
    verbose: true,

    coverageThreshold: {
        global: {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        },
        'src/utils': {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100,
        },
    },
};
