/**
 * External dependencies
 */
import { TwitterTweetEmbed } from 'react-twitter-embed';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch, select } = wp.data;
const { compose, ifCondition } = wp.compose;
const { Fragment, Component } = wp.element;
const { withSpokenMessages, Modal, DropdownMenu, MenuGroup, MenuItem, Button } = wp.components;

const tweets = [
	'1178226931277287425',
	'1177555440638382080',
	'1179365591553118227',
	'1177920047546650624',
	'1177461678004293637',
	'1178693225923497984',
	'1179727978353135616',
	'1180455552079425537',
	'1178929974247448576',
	'1176395801888604161',
];

/**
 * Render plugin
 */
class HelpControl extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			isOpen: false,
			isLoaded: false,
			tweetId: 0,
		};
	}

	componentDidMount() {
		const helpButton = document.querySelector( '.editorskit-component-help-tips' );
		if ( helpButton ) {
			helpButton.parentElement.style.display = 'block';
		}
	}

	routeChange( path ) {
		const win = window.open( path, '_blank' );
		win.focus();
	}

	tweetLoaded() {
		this.setState( { isLoaded: true } );
	}

	nextTweet() {
		this.setState( { tweetId: this.state.tweetId + 1, isOpen: false } );
	}

	componentDidUpdate() {
		if ( this.state.tweetId > 0 && ! this.state.isOpen ) {
			this.setState( { isOpen: true } );
		}
	}

	render() {
		const {
			onToggle,
		} = this.props;

		const closeModal = () => (
			this.setState( { isOpen: false, tweetId: 0 } )
		);

		return (
			<Fragment>
				<DropdownMenu
					icon="editor-help"
					className="editorskit-component-help-tips"
					label={ __( 'Help, tips and tricks' ) }
				>
					{ ( { onClose } ) => (
						<Fragment>
							<MenuGroup>
								<MenuItem
									icon="sos"
									onClick={ () => {
										onClose();
										this.setState( { isOpen: true } );
									} }
								>
									{ __( 'Tips and Tricks' ) }
								</MenuItem>
								<MenuItem
									icon="admin-site-alt3"
									onClick={ () => {
										this.routeChange( `https://www.facebook.com/groups/editorskit/` );
									} }
								>
									{ __( 'EditorsKit Community Help' ) }
								</MenuItem>
							</MenuGroup>
							<MenuGroup>
								<MenuItem
									icon="dismiss"
									onClick={ onToggle }
								>
									{ __( 'Remove/Disable Help Button' ) }
								</MenuItem>
							</MenuGroup>
						</Fragment>
					) }
				</DropdownMenu>
				{ this.state.isOpen ?
					<Modal
						title={ __( 'Tips and Tricks', 'block-options' ) }
						shouldCloseOnClickOutside={ false }
						onRequestClose={ () => closeModal() }
						closeLabel={ __( 'Close', 'block-options' ) }
						icon={ null }
						className="editorskit-modal-component components-modal--editorskit-help-tips"
					>
						<TwitterTweetEmbed
							tweetId={ tweets[ this.state.tweetId ] }
							options={ {
								align: 'center',
								theme: 'dark',
								conversation: 'none',
								dnt: true,
							} }
							onLoaded={ () => {
								this.tweetLoaded();
							} }
						/>
						{ this.state.isLoaded ?
							<div className="components-modal--editorskit-help-tips-buttons">
								<Button
									isPrimary
									isLarge
									onClick={ () => {
										this.routeChange( `https://twitter.com/i/moments/1177466596219949057` );
									} }>
									{ __( 'View All Tips and Tricks', 'block-options' ) }
								</Button>
								<Button
									isDefault
									isLarge
									onClick={ () => {
										this.nextTweet();
									} }>
									{ __( 'Next', 'block-options' ) }
								</Button>
							</div> :
							__( 'Fetching...', 'block-options' )
						}

					</Modal> : null }
			</Fragment>
		);
	}
}

export default compose( [
	withSelect( () => ( {
		isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitHelpTools' ),
	} ) ),
	withDispatch( ( dispatch ) => ( {
		onToggle() {
			dispatch( 'core/edit-post' ).toggleFeature( 'disableEditorsKitHelpTools' );
		},
	} ) ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages,
] )( HelpControl );
