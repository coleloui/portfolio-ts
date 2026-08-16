import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
	{ ignores: ['build/**', 'node_modules/**'] },
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooks,
			prettier: prettierPlugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		settings: { react: { version: 'detect' } },
		rules: {
			...reactPlugin.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': [
				'error',
				{ additionalHooks: 'useRecoilCallback' },
			],
			...prettierConfig.rules,
			'prettier/prettier': ['error', { endOfLine: 'auto' }],
			'no-mixed-spaces-and-tabs': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unused-vars': 'error',
		},
	},
);
