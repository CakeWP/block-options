/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { domReady } = wp.domReady;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { Button, Dashicon, withSpokenMessages } = wp.components;

class DisableTitle extends Component {
	constructor( props ) {
		super( ...arguments );

		this.initialize = this.initialize.bind( this );
		this.button = this.button.bind( this );
	}

	initialize(){
		const { onToggle, isDisabled } = this.props;

		let titleBlock = document.querySelector('.editor-post-title__block');
		if( titleBlock ){
			let bodyClass = isDisabled ? 'editorskit-title-hidden' : 'editorskit-title-visible';
			
			//insert prompt on header
			titleBlock.insertAdjacentHTML( 'beforeend', 
				'<span class="editorskit-toggle-title"></span>' 
			);

			//remove existing class
			if( isDisabled ){
				document.body.classList.remove( 'editorskit-title-visible' );
			}else{
				document.body.classList.remove( 'editorskit-title-hidden' );
			}
			
			document.body.classList.add( bodyClass );
			ReactDOM.render( this.button(), document.querySelector('.editorskit-toggle-title') );
		}
	}

	button(){
		const { onToggle, isDisabled } = this.props;
		return [
			<Button
				className={ 'test' }
				isSmall
				onClick={ onToggle }
			>
				<Dashicon icon={ isDisabled ? 'hidden' : 'visibility' } />
			</Button> 
		];
	}

	render() {
		this.initialize();
		return null;
	}

}

export default compose(
	withSelect( select => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableTitle' ),
			readyState: document.readyState,
		};
	} ),
	withDispatch( ( dispatch, ownProps ) => ( {
		onToggle() {
			dispatch( 'core/edit-post' ).toggleFeature( 'disableTitle' );
		},
	} ) ),
	ifCondition( props => {
		return props.readyState === 'complete';
	}),
	withSpokenMessages,
)( DisableTitle );