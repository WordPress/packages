const configGpl2Licenses = require( '../gpl2Licenses' );
const configOssLicenses = require( '../ossLicenses' );

it( 'should export an array', () => {
	expect( Array.isArray( configGpl2Licenses ) ).toBe( true );
});

it( 'should export an array', () => {
	expect( Array.isArray( configOssLicenses ) ).toBe( true );
});
