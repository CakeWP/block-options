/**
 * External dependencies
 */
import { partial } from 'lodash';

/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;
const { BlockIcon } = wp.blockEditor;
const { CheckboxControl } = wp.components;

function BlockTypesChecklist( { blockTypes, value, onItemChange } ) {
	return (
		<ul className="edit-post-manage-blocks-modal__checklist">
			{ blockTypes.map( ( blockType ) => (
				<li
					key={ blockType.name }
					className="edit-post-manage-blocks-modal__checklist-item"
				>
					<CheckboxControl
						label={ (
							<Fragment>
								{ blockType.title }
								<BlockIcon icon={ blockType.icon } />
							</Fragment>
						) }
						checked={ value.includes( blockType.name ) }
						onChange={ partial( onItemChange, blockType.name ) }
					/>
				</li>
			) ) }
		</ul>
	);
}

export default BlockTypesChecklist;
