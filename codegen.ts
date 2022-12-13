
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.A2IMCMS_API_GQL_URL,
  documents: "./lib/gql/**/*.tsx",
  ignoreNoDocuments: true,
  generates: {
    "./lib/gql/": {
      preset: "client",
      plugins: []
    },
    "./lib/gql/graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
