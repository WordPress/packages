import validateNamespace from './validateNamespace.js';
import validateHookName from './validateHookName.js';
import extractNamespace from './extractNamespace.js';
import extractHookname from './extractHookname.js';
import { doAction } from './';

/**
 * Returns a function which, when invoked, will add a hook.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that adds a new hook.
 */
function createAddHook( hooks ) {
	/**
	 * Adds the hook to the appropriate hooks container.
	 *
	 * @param {string}   hookName  Name of hook to add. Optionally, use a period to add a
	 * namespace identifying the callback in the form `hookName.vendor/plugin/function`.
	 * @param {Function} callback  Function to call when the hook is run
	 * @param {?number}  priority  Priority of this hook (default=10)
	 */
	return function addHook( hookName, callback, priority = 10 ) {
		// Extract the namespace, if provided.
		const namespace = extractNamespace( hookName );

		hookName = extractHookname( hookName );

		if ( ! validateHookName( hookName ) ) {
			return;
		}


		if ( namespace && ! validateNamespace( namespace ) ) {
			return;
		}

		if ( 'function' !== typeof callback ) {
			console.error( 'The hook callback must be a function.' );
			return;
		}

		// Validate numeric priority.
		if ( 'number' !== typeof priority ) {
			console.error( 'If specified, the hook priority must be a number.' );
			return;
		}

		const handler = { callback, priority, namespace };

		if ( hooks[ hookName ] ) {
			// Find the correct insert index of the new hook.
			const handlers = hooks[ hookName ].handlers;
			let i = 0;
			while ( i < handlers.length ) {
				if ( handlers[ i ].priority > priority ) {
					break;
				}
				i++;
			}
			// Insert (or append) the new hook.
			handlers.splice( i, 0, handler );
			// We may also be currently executing this hook.  If the callback
			// we're adding would come after the current callback, there's no
			// problem; otherwise we need to increase the execution index of
			// any other runs by 1 to account for the added element.
			( hooks.__current || [] ).forEach( hookInfo => {
				if ( hookInfo.name === hookName && hookInfo.currentIndex >= i ) {
					hookInfo.currentIndex++;
				}
			} );
		} else {
			// This is the first hook of its type.
			hooks[ hookName ] = {
				handlers: [ handler ],
				runs: 0,
			};
		}

		if ( hookName !== 'hookAdded' ) {
			doAction( 'hookAdded', hookName, namespace, callback, priority );
		}
	};
}

export default createAddHook;
