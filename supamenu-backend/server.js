var express = require("express");
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schemas/userSchema";
import useController from "./controllers/user.controllers";
import connectDB from "./database/db";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: useController,
    },
  },
});

const app = express();

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  await connectDB();
  app.listen({ port: 4000 }, () => {
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer().catch((error) => console.log(error));
