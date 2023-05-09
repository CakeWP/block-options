/**
 * External dependencies
 */
import { map, upperFirst } from 'lodash';

/**
 * Internal dependencies
 */
import Chars from './characters.json';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { getRectangleFromRange } = wp.dom;
const { compose, ifCondition } = wp.compose;
const { withSelect } = wp.data;
const { RichTextToolbarButton } = wp.blockEditor;
const { toggleFormat, insert } = wp.richText;
const { Popover, TabPanel, Button, TextControl, Tooltip } = wp.components;

let anchorRange;

class CharacterMap extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			characters: Chars.Misc,
			keyword: '',
		};
	}

	onSearch( keyword ) {
		let filtered = {};

		map( Chars, ( characters ) => {
			map( characters, ( character, key ) => {
				if ( character.name.toLowerCase().search(
					keyword.toLowerCase() ) !== -1 ) {
					filtered = Object.assign( { [ key ]: character }, filtered );
				}
			} );
		} );

		this.setState( { keyword, characters: filtered } );
	}

	render() {
		const { name, value, isActive, onChange } = this.props;
		const { characters, keyword } = this.state;

		const onToggle = () => {
			const selection = window.getSelection();
			anchorRange = selection.rangeCount > 0 ? selection.getRangeAt( 0 ) : null;

			this.setState( { keyword: '', characters: Chars.Misc } );

			onChange( toggleFormat( value, { type: name } ) );
		};

		const anchorRect = () => {
			return getRectangleFromRange( anchorRange );
		};

		const onSelect = ( tab ) => {
			const tabContent = typeof Chars[ tab ] !== 'undefined' ? Chars[ tab ] : {};
			this.setState( { characters: tabContent, keyword: '' } );
		};

		let container = 'editorskit-charmap-popover';

		if ( keyword ) {
			container += ' is-searching';
		}

		if ( isActive ) {
			return (
				<Popover
					className={ container }
					position="bottom center"
					key="charmap-popover"
					onClick={ () => {} }
					getAnchorRect={ anchorRect }
					expandOnMobile={ true }
					headerTitle={ __( 'Insert Special Character', 'block-options' ) }
					onClose={ () => {
						onChange( toggleFormat( value, { type: name } ) );
					} }
				>
					<TextControl
						value={ keyword }
						placeholder={ __( 'Search', 'block-options' ) }
						onChange={ ( newKeyword ) => {
							this.onSearch( newKeyword );
						} }
					/>
					<TabPanel
						className="editorskit-charmap-tabpanel"
						activeClass="is-active-tab"
						onSelect={ onSelect }
						tabs={ [
							{
								name: 'Misc',
								title: __( 'Misc', 'block-options' ),
								className: 'editorskit-charmap-misc',
							},
							{
								name: 'Math',
								title: __( 'Math', 'block-options' ),
								className: 'editorskit-charmap-math',
							},
							{
								name: 'Latin',
								title: __( 'Latin', 'block-options' ),
								className: 'editorskit-charmap-latin',
							},
							{
								name: 'Arrows',
								title: __( 'Arrows', 'block-options' ),
								className: 'editorskit-charmap-arrows',
							},
						] }
					>
						{ () => {
							return (
								<Fragment>
									{ Object.keys( characters ).length > 0 ? (
										<ul className="editorskit-charmap-list">
											{ map( characters, ( character, key ) => {
												return (
													<li key={ 'editorskit-charmap-' + key }>
														<Tooltip text={ upperFirst( character.name.toLowerCase() ) }>
															<Button
																isTertiary
																onClick={ () => {
																	onChange( insert( value, character.char ) );
																} }
															>
																{ character.char }
															</Button>
														</Tooltip>
													</li>
												);
											} ) }
										</ul>
									) : (
										<p>{ __( 'No characters found.', 'block-options' ) }</p>
									) }
								</Fragment>
							);
						} }
					</TabPanel>
				</Popover>
			);
		}

		return (
			<RichTextToolbarButton
				icon="editor-customchar"
				title={ __( 'Special Characters', 'block-options' ) }
				onClick={ onToggle }
				isActive={ isActive }
			/>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive(
				'disableEditorsKitCharmapFormats'
			),
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} )
)( CharacterMap );
