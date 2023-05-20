import { gql } from "apollo-server-express";

const typeDefs = gql`
    type User {
        name: String
        email: String
        password: String
    } 

    type Query {
        users: [User]
    }
`;

module.exports = typeDefs;