var express = require("express");
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schemas/userSchema";
import userResolvers from './resolvers/userResolver'
import connectDB from "./database/db";

import { json } from "express";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: userResolvers,
    },
  },
});

const app = express();

app.use(json())
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  await connectDB();
  app.listen({ port: 3333 }, () => {
    console.log(`Server running at http://localhost:3333${server.graphqlPath}`);
  });
}

startServer().catch((error) => console.log(error));
