import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';

export default function App() {
    return (
        <Query 
            query={gql`{
                hello
            }`}
            fetchPolicy="network-only"
        >
            {({ loading, error, data}: QueryResult) => {
                if (loading) {
                    return <div>Loading...</div>;
                }
                
                if (error) {
                    return <><div>Something went wrong!</div><div>{error.message}</div></>;
                }

                if (data) {
                    return <div>{data.hello}</div>
                }
            }}
        </Query>
    );
}
