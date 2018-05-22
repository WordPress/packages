// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

/**
 * External dependencies
 */
const spawn = require( 'cross-spawn' );
const existsSync = require( 'fs' ).existsSync;

/**
 * Internal dependencies
 */
const {
	getCliArgs,
	hasCliArg,
	hasProjectFile,
	hasPackageProp,
} = require( '../utils' );

const args = getCliArgs();
const prod = hasCliArg( '--prod' ) || hasCliArg( '--production' );
const dev = hasCliArg( '--dev' ) || hasCliArg( '--development' );
const gpl2 = hasCliArg( '--gpl2' );

const gpl2Licenses = [
	'BSD',
	'BSD-2-Clause',
	'BSD-3-Clause',
	'BSD-like',
	'CC-BY-3.0',
	'CC-BY-4.0',
	'CC0-1.0',
	'GPL-2.0-or-later',
	'ISC',
	'MIT',
	'MIT/X11',
	'Public Domain',
	'Unlicense',
	'WTFPL',
];

const ossLicenses = [
	'Apache-2.0',
];

const licenses = [
	...gpl2Licenses,
	...( gpl2 ?  [] : ossLicenses ),
];

const checkLicense = ( allowedLicense, licenseType ) => {
	if ( allowedLicense === licenseType ) {
		return true;
	}

	if ( ! licenseType ) {
		return false;
	}

	if ( licenseType.indexOf( 'OR' ) < 0 ) {
		return false;
	}

	const subLicenseTypes = licenseType.replace( /^\(*/g, '' ).replace( /\)*$/, '' ).split( ' OR ' ).map( ( e ) => e.trim() );

	return subLicenseTypes.reduce( ( satisfied, subLicenseType ) => {
		if ( checkLicense( allowedLicense, subLicenseType ) ) {
			return true;
		}
		return satisfied;
	}, false );

	return false;
};

const child = spawn.sync( 'npm', [
		'ls',
		'--parseable',
		...( prod ? [ '--prod' ] : [] ),
		...( dev ? [ '--dev' ] : [] ),
	]
);

const modules = child.stdout.toString().split( "\n" );

modules.forEach( ( path ) => {
	if ( ! path ) {
		return;
	}

	const filename = path + '/package.json';
	if ( ! existsSync( filename ) ) {
		console.error( `Unable to locate package.json in ${path}.` );
		process.exit( 1 );
	}

	const package = require( filename );
	const license = package.license || ( package.licenses && package.licenses.map( ( l ) => l.type ).join( ' OR ' ) );
	const licenseType = typeof license === 'object' ? license.type : license;

	const allowed = licenses.reduce( ( satisfied, allowedLicense ) => {
		if ( checkLicense( allowedLicense, licenseType ) ) {
			return true;
		}
		return satisfied;
	}, false );

	if ( ! allowed ) {
		console.log( package.name, licenseType );
	}
} );
