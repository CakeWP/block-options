/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { domReady } = wp.domReady;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { Button, Dashicon, withSpokenMessages, Tooltip } = wp.components;

class DisableTitle extends Component {
	constructor( props ) {
		super( ...arguments );

		this.initialize = this.initialize.bind( this );
		this.button = this.button.bind( this );
	}

	initialize(){
		const { onToggle, postmeta } = this.props;

		let titleBlock = document.querySelector('.editor-post-title__block');
		if( titleBlock ){
			let isDisabled = postmeta['_editorskit_title_hidden'];
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
		const { onToggle, postmeta } = this.props;

		let isDisabled = postmeta['_editorskit_title_hidden'];
		
		return (
			<Tooltip text={ __( 'Toggle Title Visibility' ) } position="top right">
				<Button
					className={ 'editorskit-button' }
					isSmall
					onClick={ onToggle }
				>
					<Dashicon icon={ isDisabled ? 'hidden' : 'visibility' } />
				</Button> 
			</Tooltip>
		);
	}

	render() {
		this.initialize();
		return null;
	}

}

export default compose(
	withSelect( select => {
		return {
			readyState: document.readyState,
			postmeta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		};
	} ),
	withDispatch( ( dispatch, ownProps ) => {
		let metavalue = ownProps.postmeta['_editorskit_title_hidden'];
		return{
			onToggle() {
				dispatch( 'core/editor' ).editPost({
					meta: {
						_editorskit_title_hidden: ! metavalue,
					}
				});
			},
		}
	} ),
	ifCondition( props => {
		return props.readyState === 'complete';
	}),
	withSpokenMessages,
)( DisableTitle );