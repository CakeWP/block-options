import { Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

function HistoryButton() {
	const isEnabled = useSelect( ( select ) => select( 'editorskit/history' ).isHistoryViewOpened() );

	const { setIsHistoryViewOpened } = useDispatch( 'editorskit/history' );
	const {
		setIsListViewOpened,
		setIsInserterOpened,
	} = useDispatch( 'core/edit-post' );

	const toggleHistoryView = () => {
		const nextStatus = isEnabled ? false : true;

		if ( nextStatus ) {
			// Closing list view.
			setIsListViewOpened( false );

			// Closing Inserter view.
			setIsInserterOpened( false );
		}

		setIsHistoryViewOpened( nextStatus );
	};

	return (
		<Button
			icon="clock"
			isPressed={ isEnabled }
			onClick={ toggleHistoryView }
			label={ __( 'Toggle history view', 'block-options' ) }
		/>
	);
}

export default HistoryButton;
