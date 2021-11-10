import { get, has, truncate } from 'lodash';
import { __ } from '@wordpress/i18n';
import { getBlockType } from '@wordpress/blocks';

/**
 * A utility function that will compute a history name based on the difference
 * between last to actions
 *
 * @param {Object} lastAction
 * @param {Object} action
 *
 * @return {string} - name
 */
export default function getComputedHistoryName( lastAction, action ) {
	if ( has( action, 'edits.template' ) ) {
		return __( 'Edit Page Template', 'block-options' );
	}

	if ( has( action, 'edits.featured_media' ) ) {
		return __( 'Edit Featured Image', 'block-options' );
	}

	if ( has( action, 'edits.comment_status' ) ) {
		return __( 'Changed Comment Status', 'block-options' );
	}

	if ( has( action, 'edits.meta' ) ) {
		return __( 'Metadata Updated', 'block-options' );
	}

	if ( has( action, 'edits.status' ) ) {
		return __( 'Change post status', 'block-options' );
	}

	if ( has( action, 'edits.title' ) ) {
		const postTitle = truncate( get( action, 'edits.title', '' ), {
			length: 30,
		} );

		return __( 'Change post title: ' + postTitle, 'block-options' );
	}

	// detecting if a single block is modified.
	if ( has( action, 'edits.blocks' ) && action.edits.blocks.length === 2 ) {
		const blockName = get( action, 'edits.blocks[0].name' );
		const blockTitle = getBlockType( blockName ).title || __( 'Unknown', 'block-options' );

		return __( 'Block modified: ' + blockTitle, 'block-options' );
	}

	return __( 'Unknown history action', 'block-options' );
}
