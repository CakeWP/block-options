/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { PluginPostStatusInfo } = wp.editPost;
const { select, withSelect, withDispatch } = wp.data;
const { withSpokenMessages, CheckboxControl } = wp.components;

class DisableTitle extends Component {
	constructor() {
		super( ...arguments );

		this.initialize = this.initialize.bind( this );
	}

	componentDidMount() {
		this.initialize();
	}

	componentDidUpdate() {
		this.initialize();
	}

	initialize() {
		const { isDisabled, postmeta } = this.props;

		const titleBlock = document.querySelector( '.editor-post-title__block' );

		if ( titleBlock ) {
			const isHidden = typeof postmeta !== 'undefined' && typeof postmeta._editorskit_title_hidden !== 'undefined' ? postmeta._editorskit_title_hidden : false;
			const bodyClass = isHidden ? 'editorskit-title-hidden' : 'editorskit-title-visible';

			//remove existing class
			if ( isHidden ) {
				document.body.classList.remove( 'editorskit-title-visible' );
			} else {
				document.body.classList.remove( 'editorskit-title-hidden' );
			}

			document.body.classList.add( bodyClass );

			//hide if disabled
			if ( isDisabled ) {
				document.body.classList.add( 'editorskit-title-visible-disabled' );
			} else {
				document.body.classList.remove( 'editorskit-title-visible-disabled' );
			}
		}
	}

	render() {
		const { onToggle, postmeta, posttype } = this.props;

		if ( [ 'wp_block' ].includes( posttype ) ) {
			return false;
		}

		const isHidden = typeof postmeta !== 'undefined' && typeof postmeta._editorskit_title_hidden !== 'undefined' ? postmeta._editorskit_title_hidden : false;

		return (
			<PluginPostStatusInfo>
				<CheckboxControl
					className="editorskit-hide-title-label"
					label={ __( 'Hide ' + posttype + ' Title', 'block-options' ) }
					checked={ isHidden }
					onChange={ onToggle }
					help={ isHidden ? __( 'Title is hidden on your website.', 'block-options' ) : null }
				/>
			</PluginPostStatusInfo>
		);
	}
}

export default compose(
	withSelect( () => {
		return {
			posttype: select( 'core/editor' ).getEditedPostAttribute( 'type' ),
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
		return ! props.isDisabled;
	} ),
	withSpokenMessages,
)( DisableTitle );
