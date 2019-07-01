
/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { withSelect }	= wp.data;
const { compose, createHigherOrderComponent, withState }	= wp.compose;
const { hasBlockSupport }	= wp.blocks;
const { InspectorAdvancedControls }	= wp.blockEditor;
const { TextControl, FormTokenField }	= wp.components;

const enhance = compose(
	withState( {
		customClassNames: [],
	} ),
	withSelect( ( select, block ) => {
		if( block.customClassNames.length < 1 && block.attributes.className ){
			// props.attributes.className || ''
			block.setState({ customClassNames: block.attributes.className.split(' ') })
		}
		return {
			suggestions: [ 'flex-initial', 'flex-1', 'flex-auto', 'flex-none' ],
		};
	} ),
);


/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param {function|Component} BlockEdit Original component.
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
		// console.log( props );
		if ( hasCustomClassName && props.isSelected ) {
			return (
				<Fragment>
					<BlockEdit { ...props } />
					<InspectorAdvancedControls>
						<FormTokenField 
							label={ __( 'Additional CSS Class(es)' ) }
							value={ customClassNames } 
							suggestions={ suggestions } 
							onChange={ ( nextValue ) => {
								props.setAttributes( {
									className: nextValue !== '' ? nextValue : undefined,
								} );

								setState( { customClassNames : nextValue !== '' ? nextValue : undefined } )
							} }
							help={ __( 'Separate multiple classes with spaces.' ) }
						/>
					</InspectorAdvancedControls>
				</Fragment>
			);
		}

		return <BlockEdit { ...props } />;
	});
}, 'withInspectorControl' );

addFilter( 'editor.BlockEdit', 'editorskit/custom-class-name/with-inspector-control', withInspectorControl );