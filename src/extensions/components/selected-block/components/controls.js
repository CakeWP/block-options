/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { compose } = wp.compose;
const { select, withSelect } = wp.data;
const { withSpokenMessages } = wp.components;

class AddSelectedBlockClass extends Component {
	componentDidUpdate() {
		const { blockName } = this.props;

		if ( ! blockName ) {
			return null;
		}

		const regx = new RegExp( '\\beditorskit-selected--.*?\\b', 'g' );
		const bodyClasses = document.body.classList;
		const addedClasses = bodyClasses.value.split( /\s+/ ).filter( function( el ) {
			return regx.test( el );
		} );
		document.body.classList.remove( ...addedClasses );
		document.body.classList.add( 'editorskit-selected--' + blockName.replace( '/', '-' ) );
	}

	render() {
		return null;
	}
}

export default compose(
	withSelect( () => {
		const selectedBlock = select( 'core/block-editor' ).getSelectedBlock();
		if ( ! selectedBlock ) {
			return {};
		}
		return {
			blockName: selectedBlock.name,
		};
	} ),
	withSpokenMessages,
)( AddSelectedBlockClass );
