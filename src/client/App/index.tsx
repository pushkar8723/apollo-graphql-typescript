import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';

export default function App() {
    return (
        <>
        <h1>It Works!</h1>
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
                    return <><h3>Something went wrong!</h3><div>{error.message}</div></>;
                }

                if (data) {
                    return <h3>{data.hello}</h3>
                }
            }}
        </Query>
        </>
    );
}
