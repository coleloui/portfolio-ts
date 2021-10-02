module.exports = {
	extends: [
		'react-app',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	plugins: ['prettier'],
	rules: {
		"prettier/prettier": ["error",
			{"endOfLine": "auto"}, {usePrettierrc: true}
		  ],
		'no-unused-vars': 'error',
		'import/no-anonymous-default-export': 'error',
		'no-mixed-spaces-and-tabs': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': [
			'error',
			{
				additionalHooks: 'useRecoilCallback'
			}
		]
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			rules: {
				'@typescript-eslint/no-non-null-assertion': 'error',
				'@typescript-eslint/explicit-module-boundary-types': 'error',
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/ban-types': 'error',
				'@typescript-eslint/no-unused-vars': 'error'
			}
		}
	]
};