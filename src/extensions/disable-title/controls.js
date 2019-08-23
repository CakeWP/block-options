/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { Button, Dashicon, withSpokenMessages, Tooltip } = wp.components;

class DisableTitle extends Component {
	constructor() {
		super( ...arguments );

		this.initialize = this.initialize.bind( this );
		this.button = this.button.bind( this );
	}

	initialize() {
		const { isDisabled, postmeta } = this.props;

		const titleBlock = document.querySelector( '.editor-post-title__block' );

		if ( titleBlock ) {
			const isHidden = postmeta._editorskit_title_hidden;
			const bodyClass = isHidden ? 'editorskit-title-hidden' : 'editorskit-title-visible';

			//insert prompt on header
			titleBlock.insertAdjacentHTML( 'beforeend',
				'<span class="editorskit-toggle-title"></span><div class="editorskit-hidden-title-label"></div>'
			);

			//remove existing class
			if ( isHidden ) {
				document.body.classList.remove( 'editorskit-title-visible' );
			} else {
				document.body.classList.remove( 'editorskit-title-hidden' );
			}

			document.body.classList.add( bodyClass );

			const editorskitTitleHolder = document.querySelector( '.editorskit-toggle-title' );
			ReactDOM.render( this.button(), editorskitTitleHolder );
			ReactDOM.render( <span>{ __( 'For internal use only. Title is hidden on your website.' ) }</span>, document.querySelector( '.editorskit-hidden-title-label' ) );

			//hide if disabled
			if ( isDisabled ) {
				document.body.classList.add( 'editorskit-title-visible-disabled' );
			} else {
				document.body.classList.remove( 'editorskit-title-visible-disabled' );
			}
		}
	}

	button() {
		const { onToggle, postmeta } = this.props;

		const isHidden = postmeta._editorskit_title_hidden;

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
	withSelect( () => {
		return {
			readyState: document.readyState,
			postmeta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitToggleTitleTools' ),
		};
	} ),
	withDispatch( ( dispatch, ownProps ) => {
		let metavalue;
		if ( typeof ownProps.postmeta !== 'undefined' && typeof ownProps.postmeta._editorskit_title_hidden !== 'undefined' ) {
			metavalue = ownProps.postmeta._editorskit_title_hidden;
		}
		return {
			onToggle() {
				dispatch( 'core/editor' ).editPost( {
					meta: {
						_editorskit_title_hidden: ! metavalue,
					},
				} );
			},
		};
	} ),
	ifCondition( ( props ) => {
		return props.readyState === 'complete' && typeof props.postmeta !== 'undefined' && typeof props.postmeta._editorskit_title_hidden !== 'undefined';
	} ),
	withSpokenMessages,
)( DisableTitle );
