import { ApolloServer, gql } from "apollo-server-micro";

let book = {
  name: "The Hungarian Sausage",
  author: "Ben Grunfeld",
};

const typeDefs = gql`
  type Book {
    name: String
    author: String
  }
  type Query {
    book: Book
  }
  type Mutation {
    updateBook(name: String!, author: String!): Book
  }
`;

const resolvers = {
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

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default async function handler(req: any, res: any) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
