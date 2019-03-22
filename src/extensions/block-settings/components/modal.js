

/**
 * Internal dependencies
 */
import DevicesOptions from '../../advanced-controls/options/devices/';
import UserStateOptions from '../../advanced-controls/options/state/';
import LogicOptions from '../../advanced-controls/options/logic/';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { select } = wp.data;
const { Fragment, Component } = wp.element;
const { Button, Modal, TextControl } = wp.components;
const { PluginBlockSettingsMenuItem } = wp.editPost;


/**
 * Render plugin
 */
class BlockSettings extends Component {

	constructor( props ) {
		super( ...arguments );

		this.reloadModal = this.reloadModal.bind( this );

		this.state   = {
			settings: '',
			isOpen: false,
			reload: false,
			selectedBlock: select( 'core/editor' ).getSelectedBlock()
		}

	}

	reloadModal(){

		this.setState( { reload: !this.state.reload } );
	}

	render() {
		
		const selectedBlock = select( 'core/editor' ).getSelectedBlock();

		const closeModal = () => (
			this.setState( { isOpen: false } )
		);
		
		return (
			<Fragment>
				<PluginBlockSettingsMenuItem
					icon='visibility'
					label={ __( 'Visibility Settings' ) }
					onClick={ () => {
						this.setState( { isOpen: true } );
					} }
				>
					
				</PluginBlockSettingsMenuItem>
				{ this.state.isOpen ?
					<Modal
						title={ __( 'Visibility Settings' ) }
						onRequestClose={ () => closeModal() }
						closeLabel={ __( 'Close' ) }
						className="editorskit-components-modal__content"
					>
						{ DevicesOptions( selectedBlock, this.reloadModal ) }
						{ UserStateOptions( selectedBlock, this.reloadModal ) }
						{ LogicOptions( selectedBlock, this.reloadModal ) }
					</Modal>
				: null }
			</Fragment>
		);
	}
};

export default BlockSettings;