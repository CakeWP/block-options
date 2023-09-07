/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Icon } from '@wordpress/components';
import { cloud } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import { Modal } from '@wordpress/components';

/**
 * Custom Dependencies
 */
import Library from './components/library';

import { QueryClientProvider } from 'react-query';
import queryClient from './query-client';
import useLibrary from './stores/library';

function App() {
	const isVisible = useLibrary( ( state ) => state.isVisible );
	const setVisible = useLibrary( ( state ) => state.setVisible );

	const openModal = () => setVisible( true );
	const closeModal = () => setVisible( false );

	return (
		<QueryClientProvider client={ queryClient }>
			<div>
				<Button
					variant="primary"
					style={ { marginRight: 5 } }
					onClick={ openModal }
					icon={ cloud }
				>
					{ __( 'Cloud Library', 'gutenberghub-template-library' ) }
				</Button>
				{ isVisible && (
					<Modal
						isFullScreen
						__experimentalhideheader
						onRequestClose={ closeModal }
						className="gutenberghub-template-library-root"
					>
						<Library onRequestClose={ closeModal } />
					</Modal>
				) }
			</div>
		</QueryClientProvider>
	);
}

export default App;
