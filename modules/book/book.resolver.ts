let book = {
  name: "The Hungarian Sausage",
  author: "Ben Grunfeld",
};

const resolver = {
  Query: {
    book: () => book,
  },

  Mutation: {
    updateBook: (root: any, args: any) => {
      book.name = args.name;
      book.author = args.author;
      return book;
    },
  },
};

export default resolver;
