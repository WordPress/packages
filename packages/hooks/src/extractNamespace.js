/**
 * Extract a namespace from a hookName+namespace string in the form .
 *
 * @param  {string} hookName The hook+namespace name to extract the namespace from.
 *                           Should be a non empty string containing only numbers, letters,
 *                           dashes, periods and underscores. Also, the hook name cannot
 *                           begin with `__`. Takes the form `hookName.vendor/plugin/function`.
 *
 * @return {bool}            Whether the hook name is valid.
 */
function extractNamespace( hookName ) {
	return hookName.split( '.' )[1];
}

export default extractNamespace;
