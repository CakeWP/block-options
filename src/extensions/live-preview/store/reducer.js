const initialState = {
	/**
	 * Current preview tab reference
	 */
	previewTabReference: undefined,
};

export default function( state = initialState, action ) {
	switch ( action.type ) {
		case 'SET_CURRENT_PREVIEW_TAB': {
			return {
				...state,
				previewTabReference: action.ref,
			};
		}

		default:
			return state;
	}
}
