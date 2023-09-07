import React from 'react';
import { __ } from '@wordpress/i18n';

function LibraryNoTemplateFound() {
	return (
		<div>
			<h4>
				{ __( 'No Result Found', 'gutenberghub-template-library' ) }
			</h4>
		</div>
	);
}

export default LibraryNoTemplateFound;
