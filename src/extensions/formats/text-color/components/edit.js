/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { select, withSelect } = wp.data;
const { BlockControls } = wp.blockEditor;
const { applyFormat, toggleFormat, removeFormat, getActiveFormat } = wp.richText;
const { Toolbar, IconButton, Popover, ColorPalette, ColorIndicator } = wp.components;
const { compose } = wp.compose;

const name = 'editorskit/color';
const title = __( 'Text Color' );

class InlineColorsToolbar extends Component {
	constructor( props ) {
		super( ...arguments );

		this.state = {
			isOpen: false,
		};
	}

	render() {
		const {
			value,
			onChange,
		} = this.props;

		let activeColor;

		const colors = get( select( 'core/block-editor' ).getSettings(), [ 'colors' ], [] );
		const activeColorFormat = getActiveFormat( value, name );

		if ( activeColorFormat ) {
			const styleColor = activeColorFormat.attributes.style;
			if ( styleColor ) {
				activeColor = styleColor.replace( new RegExp( `^color:\\s*` ), '' );
			}
		}

		return (
			<Fragment>
				<BlockControls>
					<Toolbar>
						<IconButton
							className="components-button components-icon-button components-inline-color-icon-button components-toolbar__control"
							icon="editor-textcolor"
							aria-haspopup="true"
							tooltip={ title }
							onClick={ () => this.setState( { isOpen: ! this.state.isOpen } ) }
						>
							<span
								className="components-editorskit-inline-color__indicator"
								style={ {
									backgroundColor: activeColor,
								} }
							/>
						</IconButton>

						{ this.state.isOpen && (
							<Popover
								position="bottom center"
								className="components-editorskit__inline-color-popover"
								focusOnMount="container"
								onClickOutside={ ( onClickOutside ) => {
									if ( ( ! onClickOutside.target.classList.contains( 'components-dropdown-menu__toggle' ) && ! document.querySelector( '.components-dropdown-menu__toggle' ).contains( onClickOutside.target ) ) && ( ! document.querySelector( '.components-color-palette__picker' ) || ( document.querySelector( '.components-color-palette__picker' ) && ! document.querySelector( '.components-color-palette__picker' ).contains( onClickOutside.target ) ) ) ) {
										this.setState( { isOpen: ! this.state.isOpen } );
									}
								} }
							>
								<ColorPalette
									colors={ colors }
									value={ activeColor }
									onChange={ ( color ) => {
										if ( color ) {
											onChange(
												applyFormat( value, {
													type: name,
													attributes: {
														style: `color:${ color }`,
													},
												} )
											);
										} else {
											onChange( removeFormat( value, name ) );
										}
									} }
								>
								</ColorPalette>
							</Popover>
						) }

					</Toolbar>
				</BlockControls>
			</Fragment>
		);
	}

}

export default compose(
	withSelect( select => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitColorsFormats' ),
		};
	} )
)( InlineColorsToolbar );