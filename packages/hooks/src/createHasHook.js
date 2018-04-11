import extractNamespace from './extractNamespace.js';
import extractHookname from './extractHookname.js';

/**
 * Returns a function which, when invoked, will return whether any handlers are
 * attached to a particular hook.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that returns whether any handlers are
 *                          attached to a particular hook and optional namespace.
 */
function createHasHook( hooks ) {
	/**
	 * Returns whether any handlers are attached for the given hookName and optional namespace.
	 *
	 * @param {string}   hookName  Name of hook to add. Optionally, use a period to add a
	 * namespace identifying the callback in the form `hookName.vendor/plugin/function`.
	 *
	 * @return {boolean} Whether there are handlers that are attached to the given hook.
	 */
	return function hasHook( hookName ) {

		// Extract the namespace, if provided.
		const namespace = extractNamespace( hookName );

		hookName = extractHookname( hookName );

		// Use the namespace if provided.
		if ( 'undefined' !== typeof namespace ){
			return hookName in hooks &&
				hooks[ hookName ].handlers &&
				hooks[ hookName ].handlers.map( hook => hook['namespace'] ).includes( namespace );
		}

		return hookName in hooks;
	};
}

export default createHasHook;
