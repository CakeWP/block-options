/**
 * Internal dependencies
 */
import FeaturesManager from './manager';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { Fragment, Component } = wp.element;
const { PluginMoreMenuItem } = wp.editPost;
const { withSpokenMessages, Modal } = wp.components;

/**
 * Render plugin
 */
class FeaturesManagerModal extends Component {
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

		return (
			<Fragment>
				<PluginMoreMenuItem
					icon={ null }
					role="menuitemcheckbox"
					onClick={ () => {
						this.setState( { isOpen: true } );
					} }
				>
					{ __( 'EditorsKit Settings', 'block-options' ) }
				</PluginMoreMenuItem>
				{ this.state.isOpen ?
					<Modal
						title={ __( 'EditorsKit Features Manager', 'block-options' ) }
						onRequestClose={ () => closeModal() }
						closeLabel={ __( 'Close', 'block-options' ) }
						icon={ null }
						className="editorskit-modal-component components-modal--editorskit-features-manager"
					>
						{ <FeaturesManager /> }
					</Modal> :
					null }
			</Fragment>
		);
	}
}

export default compose( [
	withSpokenMessages,
] )( FeaturesManagerModal );
