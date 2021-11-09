const actions = {
	setIsHistoryViewOpened( isOpened ) {
		return {
			type: 'SET_HISTORY_VIEW_OPENED',
			isOpened,
		};
	},

	addHistory( undoEdit ) {
		return {
			type: 'ADD_UNDO_HISTORY',
			undoEdit,
		};
	},
};

export default actions;
