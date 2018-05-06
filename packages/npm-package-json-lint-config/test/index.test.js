'use strict';

const config = require( '../' );
const isPlainObj = require( 'is-plain-obj' );

describe( 'npm-package-json-lint config tests', () => {
	it( 'should be an object', () => {
		expect( isPlainObj( config ) ).toBeTruthy();
	} );

	it( 'should be an object', () => {
		expect( isPlainObj( config.rules ) ).toBeTruthy();
	} );
} );
