import { gql } from "apollo-server-express";

const typeDefs = gql`
    type User {
        id: ID!
        names: String
        email: String
        phonenumber: Int
        password: String
    } 

    type Query {
        users: [User],
        getUser(id: ID!): User
    }

    type Mutation {
        createUser(names: String, email: String!, phonenumber: Int, password: String!):  User!
        updateUser(id: ID!, name: String, email: String, phonenumber: Int, password: String): User!
        deleteUser(id: ID!): User!
    }
`;

module.exports = typeDefs;