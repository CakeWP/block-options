
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { displayShortcut, rawShortcut, ESCAPE } from '@wordpress/keycodes';
import { withSelect, withDispatch, select } from '@wordpress/data';
import { compose, ifCondition } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { withSpokenMessages, Button, KeyboardShortcuts } from '@wordpress/components';
import { PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { isEmpty } from 'lodash';

/**
 * Render plugin
 */
class CustomizerPreview extends Component {
	constructor() {
		super( ...arguments );

		this.handleEscape = this.handleEscape.bind( this );
		this.openPreview = this.openPreview.bind( this );

		this.state = {
			isOpen: false,
			deviceType: 'desktop',
			previewTab: {},
		};
	}

	componentDidMount() {
		document.addEventListener( 'keydown', this.handleEscape );
	}

	componentWillUnmount() {
		document.removeEventListener( 'keydown', this.handleEscape );
	}

	handleEscape( event ) {
		if ( this.state.isOpen ) {
			if ( event.keyCode === ESCAPE ) {
				this.setState( { isOpen: false } );
			}
		}
	}

	openPreview() {
		const previewLink = new URL( this.props.previewLink );

		// Adding editorskit preview identifier
		previewLink.searchParams.set( 'editorskitlivepreview', true );

		const livePreviewTab = window.open( previewLink.toString() );

		this.setState( { previewTab: livePreviewTab } );
	}

	updatePreview() {
		if ( ! isEmpty( this.state.previewTab ) ) {
			this.state.previewTab.window.location.reload();
		}
	}

	reload() {
		if ( ! isEmpty( this.state.previewTab ) ) {
			this.state.previewTab.document.body.classList.add( 'editorskit-live-preview-loading' );

			// Request an autosave. This happens asynchronously and causes the component
			// to update when finished.
			if ( this.props.isDraft ) {
				this.props.savePost( { isPreview: true } ).then( () => this.updatePreview() );
			} else {
				this.props.autosave( { isPreview: true } ).then( () => this.updatePreview() );
			}
		}
	}

	render() {
		const { previewLink } = this.props;
		const { isOpen } = this.state;

		return (
			<Fragment>
				<PluginSidebarMoreMenuItem
					icon={ isOpen && 'yes' }
					role="menuitemcheckbox"
					info={ __( 'Show preview without opening new window.', 'block-options' ) }
					target="__blank"
					onClick={ () => this.openPreview() }
					shortcut={ displayShortcut.primaryShift( 'p' ) }
				>
					{ __( 'Live Preview', 'block-options' ) }
				</PluginSidebarMoreMenuItem>
				<PluginSidebarMoreMenuItem
					icon={ isOpen && 'yes' }
					role="menuitemcheckbox"
					target="__blank"
					onClick={ () => this.reload() }
				>
					{ __( 'Reload Preview', 'block-options' ) }
				</PluginSidebarMoreMenuItem>
				<KeyboardShortcuts
					bindGlobal
					shortcuts={ {
						[ rawShortcut.primaryShift( 'p' ) ]: () => {
							this.openPreview();
						},
					} }
				/>
				{ isOpen ?
					<div
						className={ 'wp-full-overlay sites-preview editorskit-preview theme-install-overlay ' + ' preview-' + this.state.deviceType }
						style={ { display: 'block' } }
					>
						<div className="wp-full-overlay-sidebar">
							<div className="wp-full-overlay-footer">
								<div className="close-full-overlay-wrapper">
									<Button
										className="close-full-overlay"
										onClick={ () => {
											this.setState( { isOpen: false } );
										} }
									>
										<span className="screen-reader-text">{ __( 'Close preview mode', 'block-options' ) }</span>
									</Button>
								</div>
								<div className="devices-wrapper">
									<h3>{ __( 'Live Preview', 'block-options' ) }</h3>
									<div className="devices">
										<Button
											className="preview-desktop"
											isActive
											onClick={ () => {
												this.setState( { deviceType: 'desktop' } );
											} }
										>
											<span className="screen-reader-text">{ __( 'Enter desktop preview mode', 'block-options' ) }</span>
										</Button>

										<Button
											className="preview-tablet"
											onClick={ () => {
												this.setState( { deviceType: 'tablet' } );
											} }
										>
											<span className="screen-reader-text">{ __( 'Enter tablet preview mode', 'block-options' ) }</span>
										</Button>

										<Button
											className="preview-mobile"
											onClick={ () => {
												this.setState( { deviceType: 'mobile' } );
											} }
										>
											<span className="screen-reader-text">{ __( 'Enter mobile preview mode', 'block-options' ) }</span>
										</Button>
									</div>
								</div>
							</div>
						</div>
						<div className="wp-full-overlay-main">
							<iframe src={ previewLink + '&editorskitPreview=true' } title={ __( 'Preview', 'block-options' ) } target="Preview"></iframe>
						</div>
					</div> :
					null }
			</Fragment>
		);
	}
}

export default compose( [
	withSelect( ( { forcePreviewLink } ) => {
		const {
			getEditedPostPreviewLink,
			getEditedPostAttribute,
		} = select( 'core/editor' );
		const { isFeatureActive } = select( 'core/edit-post' );

		const previewLink = getEditedPostPreviewLink();

		return {
			previewLink:
				forcePreviewLink !== undefined ? forcePreviewLink : previewLink,
			isDraft:
				[ 'draft', 'auto-draft' ].indexOf(
					getEditedPostAttribute( 'status' )
				) !== -1,
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitReadingTimeWriting' ),
			isIceberg: isFeatureActive( 'icebergWritingMode' ),
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		autosave: dispatch( 'core/editor' ).autosave,
		savePost: dispatch( 'core/editor' ).savePost,
	} ) ),
	ifCondition( ( props ) => {
		return ! props.isDisabled && ! props.isIceberg;
	} ),
	withSpokenMessages,
] )( CustomizerPreview );
