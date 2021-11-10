import { MenuItem, Button } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { get } from 'lodash';

import getComputedHistoryName from '../../get-computed-name';

function HistoryRevision() {
	const history = useSelect( ( select ) => select( 'editorskit/history' ).getHistory() );

	const { editEntityRecord } = useDispatch( 'core' );
	const { setIsHistoryViewOpened } = useDispatch( 'editorskit/history' );

	const undoAt = ( undoEdit ) => {
		editEntityRecord( undoEdit.kind, undoEdit.name, undoEdit.recordId, {
			...undoEdit.edits,
			meta: { isUndo: true, isEditorskitAction: true },
		} );
	};

	return (
		<div className="editorskit-history-revision-root__panel">
			<div className="editorskit-history-revision__panel_header">
				<strong>{ __( 'History', 'block-options' ) }</strong>
				<Button
					icon="no-alt"
					label={ __( 'Close history view sidebar', 'block-options' ) }
					onClick={ () => setIsHistoryViewOpened( false ) }
				/>
			</div>
			<div className="editorskit-history-revision__panel_content">
				{
					history.map( ( historyItem, index ) => {
						const previousHistoryItem = get( history, index - 1, {} );

						const computedName = getComputedHistoryName( previousHistoryItem, historyItem );

						return (
							<MenuItem key={ index } onClick={ () => undoAt( historyItem ) }>
								{ computedName }
							</MenuItem>
						);
					} )
				}
			</div>
		</div>
	);
}

export default HistoryRevision;
