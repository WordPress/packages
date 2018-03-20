# @wordpress/jest-preset-eslint

[Jest](https://facebook.github.io/jest/) preset for [ESLint](https://eslint.org) using the [`jest-runner-eslint`](https://www.npmjs.com/package/jest-runner-eslint) runner for WordPress repositories.

## Installation

Install the module

```bash
npm install @wordpress/jest-preset-eslint --save-dev
```

## Setup

### Standalone

In your `package.json` or `jest.config.json`:
```json
{
	"jest": {
		"displayName": "lint",
		"preset": "@wordpress/jest-preset-eslint",
		"verbose": false
	}
}
```

Or in your `jest.config.js`:
```js
module.exports = {
	displayName: "lint",
  runner: 'jest-runner-eslint',
}
```

### Alongside other runners

Jest can be run multiple runners simultaneously using the [projects](https://facebook.github.io/jest/docs/en/configuration.html#projects-array-string-projectconfig) configuration option, for example [`@wordpress/jest-preset-default`](https://www.npmjs.com/package/@wordpress/jest-preset-default):

In your `package.json` or `jest.config.json`:
```json
{
	"jest": {
		"projects": [
			{
				"displayName": "lint",
				"preset": "@wordpress/jest-preset-eslint"
			},
			{
				"displayName": "test",
				"preset": "@wordpress/jest-preset-default"
			}
		],
		"verbose": false
	}
}
```

Or in your `jest.config.js`:
```js
module.exports = {
	projects: [
		{
			displayName: 'lint',
			preset: '@wordpress/jest-preset-eslint'
		},
		{
			displayName: 'test'
			preset: '@wordpress/jest-preset-default'
		}
	],
	verbose: false
}
```

### Usage

Brief explanations of options included:

* `runner` - the [runner](https://facebook.github.io/jest/docs/en/configuration.html#runner-string) is set to [`jest-runner-eslint`](https://www.npmjs.com/package/jest-runner-eslint) where Jest should search for for files is set to `__tests__`.

* `testEnvironment` - the test environment is set to `node`.

* `testMatch`- the test files to match is set to `<rootDir>/**/*.js` for all files ending with the `.js` file extension.

### Notes

If you have unexpected files being linted consider adding these to a [`.eslintignore`](https://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories) file in your projects root directory.

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
