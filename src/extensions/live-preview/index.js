import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { sparkles } from '@wordpress/icons';

domReady( () => {
	// As the preview tab is not visible until the dropdown
	// Therefore using event delegation, replacing the displayed preview button
	// when displayed on screen i.e until the dropdown is opened.
	document.addEventListener( 'click', ( event ) => {
		const isPreviewButtonClicked = event.target && event.target.classList.contains( 'block-editor-post-preview__button-toggle' );

		if ( ! isPreviewButtonClicked ) {
			return;
		}

		const previewInNewTabButton = document.querySelector( '.edit-post-header-preview__grouping-external' );

		if ( previewInNewTabButton.parentNode ) {
			render( <Button icon={ sparkles }>{ __( 'Preview in the new tab', 'block-options' ) }</Button>, previewInNewTabButton.parentNode );
		}
	} );
} );
