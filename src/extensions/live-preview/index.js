import { __ } from '@wordpress/i18n';
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
import { select, dispatch } from '@wordpress/data';
import { MenuItem, ExternalLink } from '@wordpress/components';

import './store';
import { reloadPreview, updatePreview } from './helper';

import './subscriptions/hot-reload';

domReady( () => {

	const {
		isFeatureActive
	} = select('core/edit-post');

	function openPreview() {

		const isDisabled = isFeatureActive('disableEditorsKitLivePreviewWithResponsiveControlsTools');

		if (isDisabled) {
			return;
		}


		const storedPreviewTabReference = select( 'editorskit/preview' ).getCurrentPreviewRef();

		// Closing if the preview tab is already refered.
		if ( typeof storedPreviewTabReference.name !== 'undefined' && storedPreviewTabReference.name !== '' ) {
			storedPreviewTabReference.window.focus();
			reloadPreview();
			return;
		}

		// Updating the dirty post.
		updatePreview().then( () => {
			const {
				getEditedPostPreviewLink,
			} = select( 'core/editor' );

			let currentPreviewLink = getEditedPostPreviewLink();
			const currentPreviewURL = new URL(currentPreviewLink);

			currentPreviewURL.searchParams.set('editorskitresponsivepreview', true);
			currentPreviewLink = currentPreviewURL.toString();

			const _previewTabReference = window.open( currentPreviewLink );

			// Updating the preview reference.
			dispatch( 'editorskit/preview' ).setCurrentPreviewRef( _previewTabReference );
		} );
	}

	// As the preview tab is not visible until the dropdown
	// Therefore using event delegation, replacing the displayed preview button
	// when displayed on screen i.e until the dropdown is opened.
	document.addEventListener( 'click', ( event ) => {


		const isFeatureDisabled = isFeatureActive('disableEditorsKitLivePreviewWithResponsiveControlsTools')
		
		if (isFeatureDisabled) {
			return;
		}
		
		const isPreviewButtonClicked = event.target && event.target.classList.contains( 'block-editor-post-preview__button-toggle' );

		if ( ! isPreviewButtonClicked ) {
			return;
		}

		setTimeout(() => {
			const previewInNewTabButton = document.querySelector( '.edit-post-header-preview__grouping-external' );

			if ( previewInNewTabButton.parentNode ) {
				render( <MenuItem
					icon={ <ExternalLink style={ { color: '#000' } } /> }
					info={ __( 'Will automatically reload the preview to reflect changes in the editor.' ) }
					onClick={ openPreview }
				>
					{ __( 'Live Preview in the new tab', 'block-options' ) }
				</MenuItem>,
				previewInNewTabButton.parentNode
				);
			}
		}, 0)

		
	} );
} );
