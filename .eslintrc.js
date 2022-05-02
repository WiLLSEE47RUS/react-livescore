module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 13,
		'sourceType': 'module',
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	'plugins': [
		'react',
		'react-hooks',
		'@typescript-eslint',
		'prettier'
	],
	'rules': {
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/no-unnecessary-type-assertion': 'warn',
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-inferrable-types': 0,
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/unbound-method': 0,
		'@typescript-eslint/member-ordering': 'warn',
		'@typescript-eslint/no-magic-numbers': [
			'error',
			{
				ignoreNumericLiteralTypes: true,
				ignoreEnums: true,
				enforceConst: true,
				ignoreReadonlyClassProperties: true,
				ignore: [0, 1, 2, 3, 4, 5, 12, 24, 60, 100, 1000, 2000, 10000],
			},
		],

		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
			},
			{
				selector: 'function',
				format: ['camelCase', 'PascalCase'],
			},
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
			},
			{
				selector: 'parameter',
				format: ['camelCase'],
				leadingUnderscore: 'allow',
			},
			{
				selector: 'memberLike',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require',
			},
			{
				selector: 'method',
				format: ['camelCase'],
			},
			{
				selector: 'enumMember',
				format: ['PascalCase', 'UPPER_CASE'],
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
		],
		"react/react-in-jsx-scope": "off",
		'indent': [
			'error',
			2
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
