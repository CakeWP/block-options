/**
 *
 * Wordpress Dependencies
 *
 */

import { registerStore } from '@wordpress/data';

/**
 *
 *  Custom Imports
 *
 */

import rootReducer from './reducer';
import actions from './actions';
import selectors from './selectors';

// configuring custom store
const STORE_NAME = 'editorskit/preview';

/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#registerStore
 *
 * @type {Object}
 */

const storeConfig = {
	reducer: rootReducer,
	actions,
	selectors,
};

const store = registerStore( STORE_NAME, storeConfig );

export default store;

