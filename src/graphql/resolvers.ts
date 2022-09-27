import { mergeResolvers } from "@graphql-tools/merge";

import bookResolver from "../modules/book/book.resolver";
import systemResolver from "../modules/system/system.resolver";

const resolvers = [bookResolver, systemResolver];

export default mergeResolvers(resolvers);
