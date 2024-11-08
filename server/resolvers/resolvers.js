const { mergeResolvers } = require("@graphql-tools/merge");
const userResolvers = require("./userResolvers");
const itemResolvers = require("./itemResolvers");

// Merge type definitions and resolvers
const resolvers = mergeResolvers([userResolvers, itemResolvers]);

module.exports = { resolvers };
