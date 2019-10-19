/**
 * External dependencies
 */
import classnames from 'classnames';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import icon from '../icon';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { select, withSelect } = wp.data;
const { BlockControls } = wp.blockEditor;
const { applyFormat, removeFormat, getActiveFormat } = wp.richText;
const { Toolbar, IconButton, Popover, ColorPalette } = wp.components;
const { compose, ifCondition } = wp.compose;

const name = 'editorskit/background';
const title = __( 'Highlight Color', 'block-options' );

class Edit extends Component {
	constructor() {
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

		const definedColors = [

			{
				name: __( 'Orange Sunrise', 'block-options' ),
				slug: 'orange-sunrise',
				color: '#f7cc62',
			},
			{
				name: __( 'Pink Flamingo', 'block-options' ),
				slug: 'pink-flamingo',
				color: '#ffbfb5',
			},
			{
				name: __( 'Spring Green', 'block-options' ),
				slug: 'spring-green',
				color: '#b5dcaf',
			},
			{
				name: __( 'Blue Moon', 'block-options' ),
				slug: 'blue-moon',
				color: '#d6e8fa',
			},
			{
				name: __( 'Purple Mist', 'block-options' ),
				slug: 'purple-mist',
				color: '#d8c3ff',
			},
		];

		const colors = get( select( 'core/block-editor' ).getSettings(), [ 'colors' ], definedColors );
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
							icon={ icon.highlighter }
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
	withSelect( () => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitHighlightFormats' ),
		};
	} ),
	ifCondition( ( props ) => ! props.isDisabled ),
)( Edit );
