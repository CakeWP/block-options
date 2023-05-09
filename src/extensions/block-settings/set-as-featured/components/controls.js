/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { select, withSelect, withDispatch } = wp.data;
const { Fragment, Component } = wp.element;
const { withSpokenMessages } = wp.components;
const { PluginBlockSettingsMenuItem } = wp.editPost;
const { compose, ifCondition } = wp.compose;

const allowedBlocks = [ 'core/image' ];

/**
 * Render plugin
 */
class SetAsFeatImageured extends Component {
	render() {
		const { imageID, featuredImageID, onUpdateImage, onRemoveImage } = this.props;

		const label = () => {
			return (
				imageID === featuredImageID ?
					__( 'Remove as Featured Image', 'block-options' ) :
					__( 'Set as Featured Image', 'block-options' )
			);
		};

		return (
			<Fragment>
				<PluginBlockSettingsMenuItem
					icon="format-image"
					label={ label() }
					onClick={ () => {
						if ( imageID === featuredImageID ) {
							onRemoveImage();
						} else {
							onUpdateImage( imageID );
						}
					} }
				>

				</PluginBlockSettingsMenuItem>

			</Fragment>
		);
	}
}

export default compose(
	withSelect( () => {
		const selectedBlock = select( 'core/block-editor' ).getSelectedBlock();
		if ( ! selectedBlock ) {
			return {};
		}

		return {
			featuredImageID: select( 'core/editor' ).getEditedPostAttribute( 'featured_media' ),
			blockName: selectedBlock.name,
			imageID: get( selectedBlock, 'attributes.id' ),
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitSetAsFeaturedOptions' ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { editPost } = dispatch( 'core/editor' );
		const { createNotice } = dispatch( 'core/notices' );

		return {
			onUpdateImage( imageID ) {
				editPost( { featured_media: imageID } );
				createNotice(
					'info',
					__( 'Image Set as Featured.', 'block-options' ),
					{
						isDismissible: true,
						type: 'snackbar',
					}
				);
			},
			onRemoveImage() {
				editPost( { featured_media: 0 } );
				createNotice(
					'info',
					__( 'Featured Image Removed.', 'block-options' ),
					{
						isDismissible: true,
						type: 'snackbar',
					}
				);
			},
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled && allowedBlocks.includes( props.blockName ) && typeof props.imageID !== 'undefined';
	} ),
	withSpokenMessages,
)( SetAsFeatImageured );
