import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typesArray = loadFilesSync(path.join(process.cwd(), "/modules/**/*.gql"));

export default mergeTypeDefs(typesArray);
