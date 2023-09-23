import React from 'react';

import useManager from '../../store/manager.store';

import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';

function Header() {
	const currentPage = useManager((state) => state.page);
	const setPage = useManager((state) => state.setPage);

	const availablePages = [
		{
			name: 'styles',
			title: __('Styles', 'gutenberghub-styles-manager'),
		},
		{
			name: 'import-and-export',
			title: __('Import / Export', 'gutenberghub-styles-manager'),
		},
	];

	return (
		<div className="gsm-header gsm-wrap">
			<h2>{__('Styles Manager', 'gutenberghub-styles-manager')}</h2>

			<div style={{ textAlign: 'center' }}>
				<TabPanel
					onSelect={setPage}
					tabs={availablePages}
					initialTabName={currentPage}
				>
					{() => null}
				</TabPanel>
			</div>
		</div>
	);
}

export default Header;
