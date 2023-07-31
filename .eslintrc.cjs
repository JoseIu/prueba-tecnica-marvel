module.exports = {
	env: { browser: true, es2021: true },
	settings: { react: { version: 'detect' } },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'standard',
		'eslint-config-prettier',
	],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },

	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
	},
};
