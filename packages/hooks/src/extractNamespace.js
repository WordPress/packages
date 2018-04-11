/**
 * Extract a namespace from a hookName+namespace string in the form `hookName.vendor/plugin/function`.
 *
 * @param  {string} hookName The hook+namespace name to extract the namespace from.
 *                           Should be a non empty string containing only numbers, letters,
 *                           dashes and underscores. Also, the hook name cannot
 *                           begin with `__`. Takes the form `hookName.vendor/plugin/function`.
 *
 * @return {string}          The namespace, if provided.
 */
function extractNamespace( hookName ) {
	if ( 'string' !== typeof hookName ) {
		return hookName;
	}
	return hookName.split( '.' )[1];
}

export default extractNamespace;
