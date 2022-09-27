import { ApolloServer } from "apollo-server-micro";

// gql
import resolvers from "../../graphql/resolvers";
import typeDefs from "../../graphql/typeDefs";

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
