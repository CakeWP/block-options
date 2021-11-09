import { registerStore } from '@wordpress/data';

import actions from './actions';
import reducer from './reducer';
import selectors from './selectors';

const STORE_NAME = 'editorskit/history';

/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#registerStore
 *
 * @type {Object}
 */
const storeConfig = {
	reducer,
	actions,
	selectors,
};

registerStore( STORE_NAME, storeConfig );
