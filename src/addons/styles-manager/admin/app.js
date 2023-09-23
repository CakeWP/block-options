import React from 'react';

/**
 * Custom Components.
 */
import { get } from 'lodash';
import Header from './components/header';
import Content from './components/content';
import NoticesProvider from './components/notices';

import client from './client';
import { QueryClientProvider } from 'react-query';
import ImportExportManager from './components/import-export';
import useManager from './store/manager.store';

function App() {
	const currentPage = useManager((state) => state.page);

	return (
		<QueryClientProvider client={client}>
			<div className="gsm-app-root">
				<Header />
				{currentPage === 'styles' && <Content />}
				{currentPage === 'import-and-export' && <ImportExportManager />}
			</div>
			<NoticesProvider />
		</QueryClientProvider>
	);
}

export default App;
