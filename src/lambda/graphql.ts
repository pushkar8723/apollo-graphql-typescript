import { ApolloServer } from 'apollo-server-lambda';
import resolvers from './resolvers';
import typeDefs from './schema/query.schema';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

exports.handler = server.createHandler();
