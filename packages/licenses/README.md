# @wordpress/licenses

> WordPress Licenses.

## Installation

Install the module

```shell
$ npm install @wordpress/licenses
```

## Usage

```
const gpl2Licenses = require('@wordpress/licenses/gpl2Licenses');
//=> [ 'BSD-3-Clause', 'CC-BY-4.0', 'GPL-2.0-or-later', 'MIT', 'Public Domain', ...]
```
	

```
const gpl2Licenses = require('@wordpress/licenses/ossLicenses');
//=> [ 'Apache-2.0', ]
```

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>


Further research:
https://github.com/sindresorhus/spdx-license-list
https://github.com/jslicense/spdx-correct.js/blob/master/index.js < - This package picks up typos
