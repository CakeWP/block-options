const actions = {
	setCurrentPreviewRef( ref ) {
		return {
			type: 'SET_CURRENT_PREVIEW_TAB',
			ref,
		};
	},
};

export default actions;
