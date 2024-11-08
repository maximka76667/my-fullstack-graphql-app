const { gql } = require("apollo-server");

const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
    price: Float!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    password: String!
  }

  type Query {
    items: [Item]
    users: [User]
  }

  type Mutation {
    addItem(name: String!, price: Float!): Item
    addUser(name: String!, email: String!, age: Int, password: String!): User
  }
`;

module.exports = { typeDefs };
