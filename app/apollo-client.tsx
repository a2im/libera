'use client';

import { ApolloClient, InMemoryCache, HttpLink} from "@apollo/client"

const cache = new InMemoryCache({addTypename:true});
const link = new HttpLink({
  uri: `https://cms.a2im.org/graphql`
});
const client = new ApolloClient({
  cache,
  link
});

export default client;