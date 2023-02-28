/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: {
		// "^@my-ui-library/components(.*)$": "<rootDir>/src$1",
		// "^@my-ui-library/styles(.*)$": "<rootDir>/../styles/src$1",
		// "^@my-ui-library/constants(.*)$": "<rootDir>/../utils/src$1",
		"^@bennytestui1/styles": "<rootDir>/../styles/src",
		"^@bennytestui1/constants(.*)$": "<rootDir>/../constants/src",
	},
};
