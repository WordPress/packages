# @wordpress/hooks

A lightweight & efficient EventManager for JavaScript in WordPress.

## Installation

Install the module

```bash
npm install @wordpress/hooks --save
```

### Usage

API functions can be called via the global `wp.hooks` like this `wp.hooks.addAction()`, etc.

A lightweight & efficient filter and action manager.

### API Usage

When adding a hooked action or filter, best practice is to add a namespace in the form `hookName.vendor/plugin/functionName`. This enables checking for and removing the hooked callback.

// Create a hooks instance.
* `createHooks()`

// Add an action callback, with an optional namespace.
* `addAction( 'hookName', (namespace), callback, priority )` 

// Add a filter callback, with an optional namespace.
* `addFilter( 'hookName', (namespace), callback, priority )` 

// Remove all callbacks hooked on hookName.namespace. Removes all action callbacks hooked on hookName when namespace is omitted.
* `removeAction( 'hookName', (namespace), 'functionName' )` 

// Remove all callbacks hooked on hookName.namespace. Removes all filter callbacks hooked on hookName when namespace is omitted.
* `removeFilter( 'hookName', (namespace), 'functionName' )` 

// Remove all action callbacks hooked on hookName.
* `removeAllActions( 'hookName' )`

// Remove all filter callbacks hooked on hookName.
* `removeAllFilters( 'hookName' )`

// Invoke all action callbacks hooked on hookName, optionally passing arguments.
* `doAction( 'hookName', arg1, arg2, moreArgs, finalArg )`

// Filter value thru all filter callbacks hooked on hookName, optionally passing additional arguments.
* `applyFilters( 'hookName', value, arg1, arg2, moreArgs, finalArg )`

// Check if the current action hookName is being handled.
* `doingAction( 'hookName' )`

// Check if the current filter hookName is being handled.
* `doingFilter( 'hookName' )`

// Check if the action hookName has being handled.
* `didAction( 'hookName' )`

// Check if the filter hookName has being handled.
* `didFilter( 'hookName' )`

// Check if an action callback has been registered on hookName.namespace, or on hookName if namespace is omitted.
* `hasAction( 'hookName', (namespace) )`

// Check if a filter callback has been registered on hookName.namespace, or on hookName if namespace is omitted.
* `hasFilter( 'hookName', (namespace) )`
* `actions`
* `filters`

Hooks can be added to an object via composition:
`import { createHooks } from '@wordpress/hooks';`

`myObject.hooks = createHooks();`

API functions are then be called: `myObject.hooks.addAction()`.

### Events on action/filter add or remove

Whenever an action or filter is added or removed, a matching `hookAdded` or `hookRemoved` action is triggered.

* `hookAdded` action is triggered when `addFilter()` or `addAction()` method is called, passing values for `hookName`, `namespace`, `callback` and `priority`.
* `hookRemoved` action is triggered when `removeFilter()` or `removeAction()` method is called, passing values for `hookName` and `namespace`.

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
