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
const { select, withSelect, withDispatch } = wp.data;
const { BlockControls, AlignmentToolbar } = wp.blockEditor;
const { Toolbar } = wp.components;
const { hasBlockSupport } = wp.blocks;

const ALLOWED_BLOCKS = [ 'core/image', 'core/gallery' ];
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
				newClassName = blockClassName.replace( 'caption-align-center', '' ).replace( 'caption-align-right', '' ).replace( 'caption-align-left', '' ).trim();
				newClassName = newClassName.replace( /\s+/g, ' ' ).trim();
			}

			return `caption-align-${ nextAlign } ` + newClassName;
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
	withSelect( () => {
		const selectedBlock = select( 'core/block-editor' ).getSelectedBlock();
		if ( ! selectedBlock ) {
			return {};
		}
		return {
			blockId: selectedBlock.clientId,
			blockName: selectedBlock.name,
			blockClassName: get( selectedBlock, 'attributes.className' ),
			blockCaptionAlignment: get( selectedBlock, 'attributes.captionAlignment' ),
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitCaptionAlignmentFormats' ),
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		updateBlockAttributes: dispatch( 'core/block-editor' ).updateBlockAttributes,
	} ) ),
	ifCondition( ( props ) => ! props.isDisabled ),
)( AlignmentControl );
