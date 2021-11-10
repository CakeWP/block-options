import { MenuItem } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

function HistoryRevision() {
	const history = useSelect( ( select ) => select( 'editorskit/history' ).getHistory() );
	const { editEntityRecord } = useDispatch( 'core' );

	const undoAt = ( undoEdit ) => {
		editEntityRecord( undoEdit.kind, undoEdit.name, undoEdit.recordId, {
			...undoEdit.edits,
			meta: { isUndo: true },
		} );
	};

	return (
		<div className="editorskit-history-revision-root__panel">
			<div className="editorskit-history-revision__panel_header">
				<h3>{ __( 'History', 'block-options' ) }</h3>
			</div>
			<div className="editorskit-history-revision__panel_content">
				{
					history.map( ( historyItem, index ) => {
						return (
							<MenuItem key={ index } onClick={ () => undoAt( historyItem ) }>
								History Item: { index }
							</MenuItem>
						);
					} )
				}
			</div>
		</div>
	);
}

export default HistoryRevision;
