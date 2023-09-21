import { QueryClient } from 'react-query';

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 30000,
		},
	},
});

export default client;
