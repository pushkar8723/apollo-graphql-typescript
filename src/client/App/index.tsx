import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';

export default function App() {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                alt="Hero"
                src="https://repository-images.githubusercontent.com/262431185/a69fe580-922a-11ea-96b6-4108819fc1d9"
                style={{ maxWidth: '640px' }}
            />
            <h1>Apollo GraphQL TypeScript</h1>
            <Query
                query={gql`{
                    hello
                }`}
                fetchPolicy="network-only"
            >
                {({ loading, error, data }: QueryResult) => {
                    if (loading) {
                        return <div>Loading...</div>;
                    }
                    if (error) {
                        return (
                            <>
                                <h3>Something went wrong!</h3>
                                <div>{error.message}</div>
                            </>
                        );
                    }
                    if (data) {
                        return <h3>{data.hello}</h3>;
                    }
                    return null;
                }}
            </Query>
        </div>
    );
}
