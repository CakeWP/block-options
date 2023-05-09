/**
 * External dependencies
 */
import { split, replace, get, join } from 'lodash';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter, removeFilter } = wp.hooks;
const { Fragment, useState, useEffect } = wp.element;
const { withSelect, select } = wp.data;
const { compose, createHigherOrderComponent } = wp.compose;
const { hasBlockSupport } = wp.blocks;
const { InspectorAdvancedControls } = wp.blockEditor;
const { FormTokenField } = wp.components;


const enhance = compose(

	withSelect( ( selectFn, block ) => {
		const [ customClassNames, setState ] = useState( [] );

		const selectedBlock = selectFn( 'core/block-editor' ).getSelectedBlock();
		let getClasses = get( selectedBlock, 'attributes.className' );

		if ( getClasses ) {
			getClasses = replace( getClasses, ',', ' ' );
		}
		useEffect(()=>{
				if ( selectedBlock && getClasses && join( block.customClassNames, ' ' ) !== getClasses ) {
					//apply to selected block only
					if ( block.clientId === selectedBlock.clientId ) {
						// props.attributes.className || ''
						setState( split( getClasses, ' ' ) );
					}
				}
		},[getClasses])
		return {
			customClassNames,
			setState,
			suggestions: selectFn( 'core/editor' ).getEditorSettings().editorskitCustomClassNames,
		};
	} ),
);

/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param {Function} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => {
	return enhance( ( { ...props } ) => {
		const hasCustomClassName = hasBlockSupport( props.name, 'customClassName', true );

		const {
			customClassNames,
			suggestions,
			setState,
		} = props;

		if ( hasCustomClassName && props.isSelected ) {
			return (
				<Fragment>
					<BlockEdit { ...props } />
					<InspectorAdvancedControls>
						<FormTokenField
							label={ __( 'Additional CSS Class(es)', 'block-options' ) }
							value={ customClassNames }
							suggestions={ suggestions }
							maxSuggestions={ 20 }
							onChange={ ( nextValue ) => {
								props.setAttributes( {
									className: nextValue !== '' ? join( nextValue, ' ' ) : undefined,
								} );
								if ( nextValue !== '' ) {
									setState( nextValue );
								};
							} }
						/>
					</InspectorAdvancedControls>
				</Fragment>
			);
		}

		return <BlockEdit { ...props } />;
	} );
}, 'withInspectorControl' );

function applyFilters () {
	if ( !select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitCustomClassNamesTools' ) ) {
		removeFilter( 'editor.BlockEdit', 'core/editor/custom-class-name/with-inspector-control' );
		addFilter( 'editor.BlockEdit', 'editorskit/custom-class-name/with-inspector-control', withInspectorControl );
	}
}

applyFilters();
