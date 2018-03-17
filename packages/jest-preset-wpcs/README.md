# @wordpress/jest-preset-wpcs

[Jest](https://facebook.github.io/jest/) preset for [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards) with a [Node.js](https://nodejs.org/en/) based repository.

## Installation

Install the module

```bash
npm install @wordpress/jest-preset-wpcs --save-dev
```

## Setup

### Via `jest.config.json` or `jest` field in `package.json`

```json
{
  "preset": "@wordpress/jest-preset-wpcs"
}
```

### Usage

#### Brief explanations of options included

* `roots` - the directory where Jest should search for for files is set to `__tests__`.

* `testEnvironment` - the test environment is set to `node`.

* `testMatch`- detects only test files containing a `.spec.js` or `.test.js` file extension.

* `verbose` - each individual test will be reported during the run.

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
