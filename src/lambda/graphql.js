"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_lambda_1 = require("apollo-server-lambda");
var typeDefs = apollo_server_lambda_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    hello: String\n  }\n"], ["\n  type Query {\n    hello: String\n  }\n"])));
var resolvers = {
    Query: {
        hello: function () {
            return 'Hello world!';
        }
    }
};
var server = new apollo_server_lambda_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    introspection: true,
    playground: true
});
exports.handler = server.createHandler();
var templateObject_1;
