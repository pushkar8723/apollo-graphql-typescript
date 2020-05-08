import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: '/.netlify/functions/graphql'
});
const client = new ApolloClient({ cache, link });

ReactDOM.render(
    <ApolloProvider
        client={client} >
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
