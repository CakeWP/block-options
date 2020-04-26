/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose, ifCondition } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { BlockControls, AlignmentToolbar } = wp.blockEditor;
const { Toolbar } = wp.components;
const { hasBlockSupport } = wp.blocks;

const ALLOWED_BLOCKS = [ 'core/image', 'core/gallery', 'core/video', 'core/audio', 'core-embed', 'core-embed/youtube', 'core-embed/twitter', 'core-embed/facebook', 'core-embed/instagram', 'core-embed/wordpress', 'core-embed/soundcloud', 'core-embed/spotify', 'core-embed/flickr', 'core-embed/vimeo', 'core-embed/animoto', 'core-embed/cloudup', 'core-embed/collegehumor', 'core-embed/crowdsignal', 'core-embed/dailymotion', 'core-embed/hulu', 'core-embed/imgur', 'core-embed/issuu', 'core-embed/kickstarter', 'core-embed/meetup-com', 'core-embed/mixcloud', 'core-embed/reddit', 'core-embed/reverbnation', 'core-embed/screencast', 'core-embed/scribd', 'core-embed/slideshare', 'core-embed/smugmug', 'core-embed/speaker-deck', 'core-embed/ted', 'core-embed/tumblr', 'core-embed/videopress', 'core-embed/wordpress-tv', 'core-embed/amazon-kindle', 'core/table' ];
const ALIGNMENT_CONTROLS = [
	{
		icon: 'editor-alignleft',
		title: __( 'Align caption left', 'block-options' ),
		align: 'left',
	},
	{
		icon: 'editor-aligncenter',
		title: __( 'Align caption center', 'block-options' ),
		align: 'center',
	},
	{
		icon: 'editor-alignright',
		title: __( 'Align caption right', 'block-options' ),
		align: 'right',
	},
];

class AlignmentControl extends Component {
	render() {
		const {
			blockId,
			blockName,
			blockClassName,
			blockCaptionAlignment,
			updateBlockAttributes,
		} = this.props;

		const clearClassName = ( nextAlign ) => {
			let newClassName = '';

			if ( blockClassName ) {
				newClassName = blockClassName.replace( 'caption-align-default', '' ).replace( 'caption-align-center', '' ).replace( 'caption-align-right', '' ).replace( 'caption-align-left', '' ).trim();
			}

			if ( nextAlign ) {
				newClassName = `caption-align-${ nextAlign } ` + newClassName;
			}

			newClassName = newClassName.replace( /\s+/g, ' ' ).trim();

			if ( ! newClassName ) {
				newClassName = 'caption-align-default';
			}

			return newClassName;
		};

		if ( ALLOWED_BLOCKS.includes( blockName ) || hasBlockSupport( blockName, 'editorsKitCaptionAlignment' ) ) {
			//continue
		} else {
			return null;
		}
		return (
			<Fragment>
				<BlockControls>
					<Toolbar className="editorskit-components-alignment-toolbar">
						<AlignmentToolbar
							value={ blockCaptionAlignment }
							onChange={ ( nextAlign ) => {
								updateBlockAttributes( blockId, { captionAlignment: nextAlign, className: clearClassName( nextAlign ) } );
							} }
							alignmentControls={ ALIGNMENT_CONTROLS }
						/>
					</Toolbar>
				</BlockControls>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		const isDisabled = select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitCaptionAlignmentFormats' );
		const selectedBlock = select( 'core/block-editor' ).getSelectedBlock();
		if ( isDisabled || ! selectedBlock ) {
			return {
				isDisabled,
			};
		}
		return {
			isDisabled,
			blockId: selectedBlock.clientId,
			blockName: selectedBlock.name,
			blockClassName: get( selectedBlock, 'attributes.className' ),
			blockCaptionAlignment: get( selectedBlock, 'attributes.captionAlignment' ),
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		updateBlockAttributes: dispatch( 'core/block-editor' ).updateBlockAttributes,
	} ) ),
	ifCondition( ( props ) => ( ! props.isDisabled ) && props.blockId ),
)( AlignmentControl );
