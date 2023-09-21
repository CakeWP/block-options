import React from 'react';

import { __ } from '@wordpress/i18n';

function Header() {
	return (
		<div className="gsm-header gsm-wrap">
			<h2>{__('Styles Manager', 'gutenberghub-styles-manager')}</h2>
		</div>
	);
}

export default Header;
