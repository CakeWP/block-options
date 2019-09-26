/**
 * External dependencies
 */
import { size } from 'lodash';

/**
 * Internal dependencies
 */
import icon from '../../copy/icon';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { select, withSelect, withDispatch } = wp.data;
const { Fragment, Component } = wp.element;
const { withSpokenMessages, ClipboardButton } = wp.components;
const { PluginBlockSettingsMenuItem } = wp.editPost;
const { compose, ifCondition } = wp.compose;
const { serialize } = wp.blocks;

/**
 * Render plugin
 */
class CopyBlocks extends Component {
	constructor() {
		super( ...arguments );

		this.getSelection = this.getSelection.bind( this );
	}

	getSelection() {
		const {
			selectedBlockCount,
			selectedBlock,
		} = this.props;

		let cloned;
		const selectedBlocks = select( 'core/block-editor' ).getMultiSelectedBlocks();

		if ( selectedBlockCount === 1 ) {
			cloned = serialize( selectedBlock );
		}

		if ( size( selectedBlocks ) > 0 ) {
			cloned = serialize( selectedBlocks );
		}

		return cloned;
	}

	render() {
		const {
			onCopy,
			selectedBlock,
		} = this.props;

		const selectedBlocks = select( 'core/block-editor' ).getMultiSelectedBlocks();

		if ( ! selectedBlock && size( selectedBlocks ) < 1 ) {
			return false;
		}

		return (
			<Fragment>
				<PluginBlockSettingsMenuItem
					icon={ null }
					label={
						<ClipboardButton
							text={ this.getSelection() }
							icon={ icon.copy }
							onCopy={ onCopy }
						>
							{ __( 'Copy', 'block-options' ) }
						</ClipboardButton>
					}
					onClick={ () => {

					} }
				>
				</PluginBlockSettingsMenuItem>

			</Fragment>
		);
	}
}

export default compose(
	withSelect( () => {
		const { getSelectedBlockCount, getSelectedBlock, getMultiSelectedBlocks } = select( 'core/block-editor' );
		if ( ! getSelectedBlock() ) {
			return {};
		}

		return {
			selectedBlockCount: getSelectedBlockCount(),
			selectedBlock: getSelectedBlock(),
			selectedBlocks: getMultiSelectedBlocks(),
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitCopyOptions' ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );

		return {
			onCopy() {
				const selectedBlocks = select( 'core/block-editor' ).getMultiSelectedBlocks();
				let notice = __( 'Selected block copied.', 'block-options' );
				if ( size( selectedBlocks ) > 0 ) {
					notice = __( 'Selected blocks copied.', 'block-options' );
				}

				createNotice(
					'info',
					notice,
					{
						isDismissible: true,
						type: 'snackbar',
					}
				);
			},
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages,
)( CopyBlocks );
