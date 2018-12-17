import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { ApolloClient, InMemoryCache, HttpLink, concat } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import introspectionQueryResultData from './fragmentTypes.json';
import { PrimeLink, primeUrl } from './primeUtils';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

let apolloClient = null;

if (!process.browser) {
  global.fetch = fetch;
}

const httpLink = new HttpLink({
  uri: primeUrl + '/graphql',
  credentials: 'include',
});

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: concat(PrimeLink, httpLink),
    cache: new InMemoryCache({ fragmentMatcher }).restore(initialState || {}),
  });
}

export default function initApollo(initialState) {
  if (!process.browser) {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
