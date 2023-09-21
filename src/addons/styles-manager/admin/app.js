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

function App() {

	return (
		<QueryClientProvider client={client}>
			<div className="gsm-app-root">
				<Header />
				<Content />
			</div>
			<NoticesProvider />
		</QueryClientProvider>
	);
}

export default App;
