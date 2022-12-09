'use client';

import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink} from "@apollo/client"


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `https://cms.a2im.org/graphql`
});
const client = new ApolloClient({
  cache,
  link
});

export default client;



export function Providers({ children }) {
  return (
    <ApolloProvider client={client}>
        {children}
        </ApolloProvider>
  );
}