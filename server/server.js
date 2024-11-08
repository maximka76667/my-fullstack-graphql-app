const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schemas/itemSchema");
const { resolvers } = require("./resolvers/resolvers");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

// Connect to MongoDB (or another database)
mongoose.connect("mongodb://localhost/graphql-example", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  // Start the server
  app.listen(5000, () => {
    console.log("Server running at http://localhost:5000/graphql");
  });
};

startServer();
