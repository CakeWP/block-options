import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { get } from 'lodash';

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

	return (
		<Button onClick={ toggleDetach }>
			{
				__( 'Detach', 'block-options' )
			}
		</Button>
	);
}

export default DetachSwitchButton;
