import React from 'react';
import ReactDOM from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import App from './App';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: '/.netlify/functions/graphql',
});
const client = new ApolloClient({ cache, link });

ReactDOM.render(
    <ApolloProvider
        client={client}
    >
        <App />
    </ApolloProvider>,
    document.getElementById('root'),
);
