const Item = require("../models/itemModel"); // Mongoose model

const resolvers = {
  Query: {
    items: async () => {
      return await Item.find();
    },
  },
  Mutation: {
    addItem: async (_, { name }) => {
      const item = new Item({ name });
      await item.save();
      return item;
    },
  },
};

module.exports = resolvers;
