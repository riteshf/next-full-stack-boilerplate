import { mergeResolvers } from "@graphql-tools/merge";
import bookResolver from "../modules/book/book.resolver";

const resolvers = [bookResolver];

export default mergeResolvers(resolvers);
