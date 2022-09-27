let book = [
  {
    id: "1",
    name: "The Hungarian Sausage",
    author: "Ben Grunfeld",
  },
];

const resolver = {
  Query: {
    getBooks: () => book,
  },

  Mutation: {},
};

export default resolver;
