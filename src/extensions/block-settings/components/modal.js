

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
const { select, withSelect } = wp.data;
const { Fragment, Component } = wp.element;
const { Button, Modal, TextControl, TabPanel } = wp.components;
const { PluginBlockSettingsMenuItem } = wp.editPost;
const { compose } = wp.compose;

const restrictedBlocks = [ 'core/freeform' ];

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

		const {
			isDisabledDevices,
			isDisabledUserState,
			isDisabledLogic,
			isDisabledACF,
		} = this.props;
		
		let selectedBlock = select( 'core/editor' ).getSelectedBlock();
		selectedBlock = Object.assign( { reloadModal: this.reloadModal }, selectedBlock );

		const closeModal = () => (
			this.setState( { isOpen: false } )
		);

		const tabs = [];

		if( isDisabledDevices || isDisabledUserState ){
			tabs.push({
				name: 'default',
				title: __( 'Default' ),
				className: 'editorskit-default',
			});
		}

		if( !isDisabledLogic || !isDisabledACF ){
			tabs.push({
				name: 'advanced',
				title: __( 'Advanced' ),
				className: 'editorskit-advanced',
			});
		}
		
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
							tabs={ tabs }>
							{
								( tab ) => {
									switch( tab.name ){
										case 'advanced':
											return[
												!isDisabledLogic && LogicOptions( selectedBlock ),
												!isDisabledACF && ACFOptions( selectedBlock ),
											];
										break;
		    							default:
		    								return[
												!isDisabledDevices && DevicesOptions( selectedBlock ),
												!isDisabledUserState && UserStateOptions( selectedBlock ),
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

export default compose(
	withSelect( select => {
		return {
			isDisabledDevices : select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitDevicesVisibility' ),
			isDisabledUserState : select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitUserStateVisibility' ),
			isDisabledLogic : select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitLogicVisibility' ),
			isDisabledACF : select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitAcfVisibility' ),
		};
	} ),
)( BlockSettings );
