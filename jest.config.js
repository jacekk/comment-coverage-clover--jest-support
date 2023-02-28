const path = require('path')

module.exports = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	rootDir: path.resolve(__dirname),
	roots: ['<rootDir>/src'],
	testMatch: ['**/*.spec.js'],
}
