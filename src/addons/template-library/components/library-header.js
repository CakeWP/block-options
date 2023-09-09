import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { close } from '@wordpress/icons';

import LibraryConnectionsSwitcher from './library-connections-switcher';

function LibraryHeader( props ) {
	return (
		<div className="gutenberghub-template-library-header">
			<h3>{ __( 'Library', 'gutenberghub-template-library' ) }</h3>

			<LibraryConnectionsSwitcher />

			<Button
				showTooltip
				icon={ close }
				onClick={ props.onClose }
				label={ __( 'Close Modal', 'gutenberghub-template-library' ) }
			/>
		</div>
	);
}

export default LibraryHeader;
