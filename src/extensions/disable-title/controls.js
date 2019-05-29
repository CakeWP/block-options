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
		const { onToggle, isDisabled, postmeta } = this.props;
		
		let titleBlock = document.querySelector('.editor-post-title__block');

		if( titleBlock ){
			let isHidden = postmeta['_editorskit_title_hidden'];
			let bodyClass = isHidden ? 'editorskit-title-hidden' : 'editorskit-title-visible';
			
			//insert prompt on header
			titleBlock.insertAdjacentHTML( 'beforeend', 
				'<span class="editorskit-toggle-title"></span><div class="editorskit-hidden-title-label"></div>' 
			);

			//remove existing class
			if( isHidden ){
				document.body.classList.remove( 'editorskit-title-visible' );
			}else{
				document.body.classList.remove( 'editorskit-title-hidden' );
			}
			
			document.body.classList.add( bodyClass );

			let editorskitTitleHolder = document.querySelector('.editorskit-toggle-title');
			ReactDOM.render( this.button(), editorskitTitleHolder );
			ReactDOM.render( <span>{ __( 'For internal use only. Title is hidden on your website.' ) }</span> , document.querySelector('.editorskit-hidden-title-label') );

			//hide if disabled
			if( isDisabled ){
				editorskitTitleHolder.classList.add( 'hidden' );
			}else{
				editorskitTitleHolder.classList.remove( 'hidden' );
			}
		}
	}

	button(){
		const { onToggle, postmeta } = this.props;

		let isHidden = postmeta['_editorskit_title_hidden'];
		
		return (
			<Tooltip text={ __( 'Toggle Title Visibility' ) } position="top right">
				<Button
					className={ 'editorskit-button' }
					isSmall
					onClick={ onToggle }
				>
					<Dashicon icon={ isHidden ? 'hidden' : 'visibility' } />
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
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitToggleTitleTools' ),
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