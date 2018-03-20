# @wordpress/jest-preset-node

[Jest](https://facebook.github.io/jest/) preset for WordPress [Node.js](https://nodejs.org/en/) repositories.

## Installation

Install the module

```bash
npm install @wordpress/jest-preset-node --save-dev
```

## Setup

### Via `jest.config.json` or `jest` field in `package.json`

```json
{
  "preset": "@wordpress/jest-preset-node"
}
```

### Usage

#### Brief explanations of options included

* `roots` - the directory where Jest should search for for files is set to `__tests__`.

* `testEnvironment` - the test environment is set to `node`.

* `testMatch`- detects only test files containing a `.spec.js` or `.test.js` file extension.

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
