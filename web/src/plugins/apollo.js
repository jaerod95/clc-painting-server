import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:9494/v1/graphql',
});

// Create the apollo client
const apollo = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

// Install the vue plugin
Vue.use(VueApollo);

export default apollo;
