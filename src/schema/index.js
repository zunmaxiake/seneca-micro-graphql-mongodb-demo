import { makeExecutableSchema } from '@graphql-tools/schema';
import { schema as companySchema, resolvers as companyResolvers } from './company'

const executableSchema = makeExecutableSchema({
  typeDefs: [companySchema],
  resolvers: companyResolvers,
});

module.exports = executableSchema;