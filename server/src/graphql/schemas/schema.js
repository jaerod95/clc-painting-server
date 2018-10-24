import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

// Do every time we create a model
import { typeDefs as Employee, resolvers as employeeResolvers } from './employee';


const Query = `

type Query {
    _empty: String
}
type Mutation {
    _empty: String
}
`;

// Do every time we create a model
export default makeExecutableSchema({
  typeDefs: [
    Query,
    Employee,
  ],
  resolvers: merge(
    employeeResolvers,
  ),
});
