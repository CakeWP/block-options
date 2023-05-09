/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { dispatch } = wp.data;
const { Fragment } = wp.element;
const { TextareaControl } = wp.components;

const LogicOptions = ( props ) => {
	const {
		clientId,
		attributes,
		reloadModal,
	} = props;

	const {
		editorskit,
	} = attributes;

	return (
		<Fragment>
			<div className="editorskit-button-group-container editorskit-button-group-logic">
				<TextareaControl
					rows="2"
					label={ __( 'Conditional Logic', 'block-options' ) }
					help={ __( 'Add valid PHP conditional tags for custom & advanced visibility options.  The "editorskit_allow_unsafe_eval" filter must be set to true for tags to be evaluated.', 'block-options' ) }
					value={ editorskit.logic ? editorskit.logic : null }
					onChange={ ( newValue ) => {
						delete editorskit.logic;

						const blockOptions = Object.assign( { logic: newValue }, editorskit );

						dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, { editorskit: blockOptions } );

						if ( reloadModal ) {
							reloadModal();
						}
					} }
				/>
			</div>
		</Fragment>
	);
};

export default LogicOptions;
