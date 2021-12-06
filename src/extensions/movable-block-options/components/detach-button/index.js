import { __ } from '@wordpress/i18n';
import { get } from 'lodash';

import { PluginSidebarMoreMenuItem } from '@wordpress/edit-post';

import { useDispatch, useSelect } from '@wordpress/data';

function DetachSwitchButton() {

	const isExtensionDisabled = useSelect(select => select('core/edit-post').isFeatureActive('disableEditorsKitMoveableSidebarTools'));
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

	const info = ! isDetached ? __( 'Use settings sidebar as a moveable modal.', 'block-options' ) : __( 'Make the settings sidebar sticky to the right.', 'block-options' );

	return isExtensionDisabled ? null : (
		<PluginSidebarMoreMenuItem
			info={ info }
			onClick={ toggleDetach }
			icon={ isDetached ? 'sticky' : 'move' }
		>

			{
				! isDetached ? __( 'Settings Sidebar - Make Modal', 'block-options' ) : __( 'Settings Sidebar - Snap to Right', 'block-options' )
			}
		</PluginSidebarMoreMenuItem>
	);
}

export default DetachSwitchButton;
