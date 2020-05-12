import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { v4 as uuidv4 } from "uuid";
import gql from "graphql-tag";
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://radiant-plains-00264.herokuapp.com/",
});

// Cache implementation
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  // Leer el storage almacenado
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});
// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
const token = localStorage.getItem("token");
if (!token) {
  apolloClient
    .mutate({
      // Query
      mutation: gql`
        mutation auth($input: String!) {
          auth(input: $input)
        }
      `,
      // Parameters
      variables: {
        input: uuidv4(),
      },
    })
    .then((e) => localStorage.setItem("token", e.data.auth));
} else {
  console.log(token);
}

export default apolloClient;
