/**
 * External dependencies
 */
import { castArray } from 'lodash';

/**
 * Internal dependencies
 */
import shortcutConfig from './config';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment, Component } = wp.element;
const { PluginSidebarMoreMenuItem } = wp.editPost;
const { compose, ifCondition } = wp.compose;
const { select, withSelect } = wp.data;
const { withSpokenMessages, Modal } = wp.components;

/**
 * Render plugin
 */
class MarkdownFormatting extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			isOpen: false,
		};
	}

	render() {
		const closeModal = () => (
			this.setState( { isOpen: false } )
		);

		const mapKeyCombination = ( keyCombination ) => keyCombination.map( ( character, index ) => {
			if ( character === '+' ) {
				return (
					<Fragment key={ index }>
						{ character }
					</Fragment>
				);
			}

			return (
				<kbd
					key={ index }
					className="edit-post-keyboard-shortcut-help__shortcut-key"
				>
					{ character }
				</kbd>
			);
		} );

		const ShortcutList = ( { shortcuts } ) => (
			<dl className="edit-post-keyboard-shortcut-help__shortcut-list">
				{ shortcuts.map( ( { keyCombination, description, ariaLabel }, index ) => (
					<div
						className="edit-post-keyboard-shortcut-help__shortcut"
						key={ index }
					>
						<div className="edit-post-keyboard-shortcut-help__shortcut-description">
							{ description }
						</div>
						<div className="edit-post-keyboard-shortcut-help__shortcut-term">
							<kbd className="edit-post-keyboard-shortcut-help__shortcut-key-combination" aria-label={ ariaLabel }>
								{ mapKeyCombination( castArray( keyCombination ) ) }
							</kbd>
						</div>
					</div>
				) ) }
			</dl>
		);

		const ShortcutSection = ( { title, shortcuts } ) => (
			<section className="edit-post-keyboard-shortcut-help__section">
				<h2 className="edit-post-keyboard-shortcut-help__section-title">
					{ title }
				</h2>
				<ShortcutList shortcuts={ shortcuts } />
			</section>
		);

		return (
			<Fragment>
				<PluginSidebarMoreMenuItem
					icon={ null }
					role="menuitemcheckbox"
					onClick={ () => {
						this.setState( { isOpen: true } );
					} }
				>
					{ __( 'Markdown Formatting', 'block-options' ) }
				</PluginSidebarMoreMenuItem>
				{ this.state.isOpen ?
					<Modal
						title={ __( 'Keyboard Shortcuts', 'block-options' ) }
						onRequestClose={ () => closeModal() }
						closeLabel={ __( 'Close', 'block-options' ) }
						icon={ null }
						className="editorskit-modal-component components-modal--editorskit-markdown"
					>
						{ shortcutConfig.map( ( config, index ) => (
							<ShortcutSection key={ index } { ...config } />
						) ) }
					</Modal> :
					null }
			</Fragment>
		);
	}
}

export default compose(
	withSelect( () => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitMarkdownWriting' ),
		};
	} ),
	ifCondition( ( props ) => ! props.isDisabled ),
	withSpokenMessages,
)( MarkdownFormatting );
