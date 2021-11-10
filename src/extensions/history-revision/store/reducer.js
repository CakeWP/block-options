
const initialState = {
	history: [],
	isHistoryViewOpened: false,
};

export default function( state = initialState, action ) {
	switch ( action.type ) {
		case 'SET_HISTORY_VIEW_OPENED':
			return {
				...state,
				isHistoryViewOpened: action.isOpened,
			};

		case 'ADD_UNDO_HISTORY':
			return {
				...state,
				history: [
					action.undoEdit,
					...state.history,
				],
			};

		default:
			return state;
	}
}
