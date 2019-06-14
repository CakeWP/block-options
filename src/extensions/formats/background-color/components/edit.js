/**
 * External dependencies
 */
import classnames from 'classnames';
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

const name = 'editorskit/background';
const title = __( 'Highlight Color' );

class Edit extends Component {
	constructor( props ) {
		super( ...arguments );

		this.toggle = this.toggle.bind( this );

		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState( ( state ) => ( {
			isOpen: ! state.isOpen,
		} ) );
	}

	render() {
		const { isOpen } = this.state;
		const {
			value,
			onChange,
			isActive,
		} = this.props;

		let activeColor;

		const colors = [
			{
				name: __('Orange Sunrise'),
				slug: 'orange-sunrise',
				color: '#f7cc62'
			},
			{
				name: __('Pink Flamingo'),
				slug: 'pink-flamingo',
				color: '#ffbfb5'
			},
			{
				name: __('Spring Green'),
				slug: 'spring-green',
				color: '#b5dcaf'
			},
			{
				name: __('Blue Moon'),
				slug: 'blue-moon',
				color: '#d6e8fa'
			},
			{
				name: __('Purple Mist'),
				slug: 'purple-mist',
				color: '#d8c3ff'
			},
		];
		const activeColorFormat = getActiveFormat( value, name );

		if ( activeColorFormat ) {
			const styleColor = activeColorFormat.attributes.style;
			if ( styleColor ) {
				activeColor = styleColor.replace( new RegExp( `^background-color:\\s*` ), '' );
			}
		}

		return (
			<Fragment>
				<BlockControls>
					<Toolbar className="editorskit-components-toolbar">
						<IconButton
							className={ classnames(
								'components-button components-icon-button components-editorskit-toolbar__control components-toolbar__control components-editorskit-background-format', {
									'is-active': isActive,
								}
							) }
							icon="admin-customizer"
							aria-haspopup="true"
							tooltip={ title }
							onClick={ this.toggle }
						>
						</IconButton>

						{ isOpen && (
							<Popover
								position="bottom center"
								className="components-editorskit__inline-color-popover"
								focusOnMount="container"
								onClickOutside={ ( onClickOutside ) => {
									if ( ( ! onClickOutside.target.classList.contains( 'components-editorskit-background-format' ) && ! document.querySelector( '.components-editorskit-background-format' ).contains( onClickOutside.target ) ) && ( ! document.querySelector( '.components-color-palette__picker' ) || ( document.querySelector( '.components-color-palette__picker' ) && ! document.querySelector( '.components-color-palette__picker' ).contains( onClickOutside.target ) ) ) ) {
										this.setState( { isOpen: ! isOpen } );
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
														style: `background-color:${ color }`,
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
)( Edit );