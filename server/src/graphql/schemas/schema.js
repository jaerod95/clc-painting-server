import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

// Do every time we create a model
import { typeDefs as Employee, resolvers as employeeResolvers } from './employee';
import { typeDefs as Project, resolvers as projectResolvers } from './project';
import { typeDefs as User, resolvers as userResolvers } from './user';


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
    Project,
    User,
  ],
  resolvers: merge(
    employeeResolvers,
    projectResolvers,
    userResolvers,
  ),
});
