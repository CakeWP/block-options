/**
 * External dependencies
 */
import map from 'lodash/map';

/**
 * Internal dependencies
 */
import ImportForm from './import-form';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { withSelect, withDispatch, select } = wp.data;
const { compose, withState, ifCondition } = wp.compose;
const { Fragment, Component } = wp.element;
const { PluginMoreMenuItem } = wp.editPost;
const { withSpokenMessages, Modal, CheckboxControl } = wp.components;


/**
 * Render plugin
 */
class ImportExportManager extends Component {

	constructor( props ) {
		super( ...arguments );

		this.state   = {
			isOpen: false,
		}
	}
	
	render(){
		const {
			editorSettings,
			onToggle,
		} = this.props;

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
					{ __( 'Import or Export' ) }
				</PluginMoreMenuItem>
				{ this.state.isOpen ?
					<Modal
						title={ __( 'Import or Export' ) }
						onRequestClose={ () => closeModal() }
						closeLabel={ __( 'Close' ) }
						icon={ null }
						className='editorskit-modal-component components-modal--editorskit-features-manager'
					>
						<ImportForm />
					</Modal>
				: null }
			</Fragment>
		);
	}
};

export default compose( [
	withSelect( ( select ) => ( {
		isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitImportExportTools' ),
	} ) ),
	withDispatch( ( dispatch, ownProps ) => ( {
		onToggle( category, item ) {
			dispatch( 'core/edit-post' ).toggleFeature( 'disableEditorsKit' + capitalize( item ) + capitalize( category ) );
		},
	} ) ),
	ifCondition( props => {
		return !props.isDisabled;
	} ),
	withSpokenMessages,
] )( ImportExportManager );