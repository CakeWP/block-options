import { get } from 'lodash';

const selectors = {
	/**
  * Get current preview reference
  *
  * @param {Object} state
  * @return {string}
  */
	getCurrentPreviewRef( state ) {
		return get( state, 'previewTabReference', {} );
	},
};

export default selectors;
