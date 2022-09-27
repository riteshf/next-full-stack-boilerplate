import { mergeResolvers } from "@graphql-tools/merge";

import systemResolver from "../modules/system/system.resolver";

const resolvers = [systemResolver];

export default mergeResolvers(resolvers);
