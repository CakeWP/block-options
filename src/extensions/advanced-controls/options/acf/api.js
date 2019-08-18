/**
 * Use withSelect instead of withAPIData
 */

const { apiFetch } = wp;
const { registerStore } = wp.data;

const actions = {
	setACFields( ACFfields ) {
		return {
			type: 'SET_ACF_FIELDS',
			ACFfields,
		};
	},

	receiveACFields( path ) {
		return {
			type: 'RECEIVE_ACF_FIELDS',
			path,
		};
	},
	fetchFromAPI( path ) {
		return {
			type: 'FETCH_FROM_API',
			path,
		};
	},
};

registerStore( 'editorskit/acf', {
	reducer( state = { ACFfields: {} }, action ) {
		switch ( action.type ) {
			case 'SET_ACF_FIELDS':
				return {
					...state,
					ACFfields: action.ACFfields,
				};
			case 'RECEIVE_ACF_FIELDS':
				return action.ACFfields;
		}

		return state;
	},

	actions,

	selectors: {
		receiveACFields( state ) {
			const { ACFfields } = state;
			return ACFfields;
		},
	},

	controls: {
		FETCH_FROM_API( action ) {
			return apiFetch( { path: action.path } );
		},
	},

	resolvers: {
		* receiveACFields() {
			const path = '/editorskit/v1/acf';
			const ACFfields = yield actions.fetchFromAPI( path );
			yield actions.setACFields( ACFfields );
		},
	},

} );
