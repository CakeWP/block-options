import { get } from 'lodash';

const selectors = {

	isHistoryViewOpened( state ) {
		return get( state, 'isHistoryViewOpened', false );
	},

	getHistory( state ) {
		return get( state, 'history', [] );
	},
};

export default selectors;
