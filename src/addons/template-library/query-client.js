import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient( {
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
			refetchOnWindowFocus: false,
			refetchOnmount: false,
			refetchOnReconnect: false
		},
	},
} );

export default queryClient;
