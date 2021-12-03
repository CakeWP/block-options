import { __ } from '@wordpress/i18n';
import { get } from 'lodash';

import { PluginSidebarMoreMenuItem } from '@wordpress/edit-post';

import { useDispatch, useSelect } from '@wordpress/data';

function DetachSwitchButton() {
	const currentPostMetadata = useSelect( ( select ) => select( 'core/editor' ).getEditedPostAttribute( 'meta' ) );
	const isDetached = get( currentPostMetadata, '_editorskit_is_block_options_detached' );
	const { editPost } = useDispatch( 'core/editor' );

	const toggleDetach = () => {
		editPost( {
			meta: {
				_editorskit_is_block_options_detached: ! isDetached,
			},
		} );
	};

	const info = ! isDetached ? __( 'Use block settings panel as moveable modal.', 'block-options' ) : __( 'Use block settings panel sticky as default.', 'block-options' );

	return (
		<PluginSidebarMoreMenuItem
			info={ info }
			onClick={ toggleDetach }
			icon={ isDetached ? 'sticky' : 'move' }
		>

			{
				! isDetached ? __( 'Make Settings Panel Modal', 'block-options' ) : __( 'Make Settings Panel Sticky', 'block-options' )
			}
		</PluginSidebarMoreMenuItem>
	);
}

export default DetachSwitchButton;
