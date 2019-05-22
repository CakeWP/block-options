

/**
 * Internal dependencies
 */
import DevicesOptions from '../../advanced-controls/options/devices/';
import UserStateOptions from '../../advanced-controls/options/state/';
import LogicOptions from '../../advanced-controls/options/logic/';
import ACFOptions from '../../advanced-controls/options/acf/';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { select } = wp.data;
const { Fragment, Component } = wp.element;
const { Button, Modal, TextControl, TabPanel } = wp.components;
const { PluginBlockSettingsMenuItem } = wp.editPost;

const restrictedBlocks = [ 'core/freeform', 'core/shortcode' ];

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
		
		let selectedBlock = select( 'core/editor' ).getSelectedBlock();
		selectedBlock = Object.assign( { reloadModal: this.reloadModal }, selectedBlock );

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
				{ this.state.isOpen && typeof selectedBlock.name!== 'undefined' && !restrictedBlocks.includes( selectedBlock.name ) ?
					<Modal
						title={ __( 'Visibility Settings' ) }
						onRequestClose={ () => closeModal() }
						closeLabel={ __( 'Close' ) }
						className="editorskit-components-modal__content"
					>
						<TabPanel className="editorskit-tab-panel"
							activeClass="is-active"
							tabs={ [
								{
									name: 'default',
									title: __( 'Default' ),
									className: 'editorskit-default',
								},
								{
									name: 'advanced',
									title: __( 'Advanced' ),
									className: 'editorskit-advanced',
								},
							] }>
							{
								( tab ) => {
									switch( tab.name ){
										case 'advanced':
											return[
												LogicOptions( selectedBlock ),
												ACFOptions( selectedBlock ),
											];
										break;
		    							default:
		    								return[
												DevicesOptions( selectedBlock ),
												UserStateOptions( selectedBlock ),
											];
		    							break;
									}
								}
							}
						</TabPanel>
					</Modal>
				: null }

				{ this.state.isOpen && typeof selectedBlock.name !== 'undefined' && restrictedBlocks.includes( selectedBlock.name ) ?
					<Modal
						title={ __( 'Visibility Settings' ) }
						onRequestClose={ () => closeModal() }
						closeLabel={ __( 'Close' ) }
						className="editorskit-components-modal__content"
					>
						<p>{ __( 'Convert classic block to gutenberg blocks first to have this feature available. Thanks!' ) }</p>
					</Modal>
				: null }

			</Fragment>
		);
	}
};

export default BlockSettings;