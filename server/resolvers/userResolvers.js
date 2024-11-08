const User = require("../models/userModel"); // Mongoose model

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    addUser: async (_, { name, email, password, age }) => {
      const user = new User({ name, email, password, age });
      await user.save();
      return user;
    },
  },
};

module.exports = resolvers;
