import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
      {!import.meta.env.VITE_NODE_ENV && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
