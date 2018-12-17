import { ApolloLink } from 'apollo-link';

let versionId;

export const primeUrl = 'http://localhost:4000';
// export const primeUrl = 'https://prime-backend.herokuapp.com/graphql';

export const setVersionId = (id = null) => {
  versionId = id;
}

export const PrimeLink = new ApolloLink((operation, forward) => {
  const headers = {};
  operation.setContext({
    headers: {
      authorization: null,
      'x-prime-version-id': versionId || '',
    } 
  });

  return forward(operation);
});
