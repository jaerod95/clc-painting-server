import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

// Do every time we create a model
import { typeDefs as Employee, resolvers as employeeResolvers } from './employee';
import { typeDefs as Project, resolvers as projectResolvers } from './project';
import { typeDefs as User, resolvers as userResolvers } from './user';
import { typeDefs as Skill, resolvers as skillResolvers } from './skill';
import { typeDefs as EmployeeSkill, resolvers as employeeSkillResolvers } from './employeeSkill';
import { typeDefs as Assignment, resolvers as assignmentResolvers } from './assignment';
import { typeDefs as Chemistry, resolvers as chemistryResolvers } from './chemistry';
import { typeDefs as Date, resolvers as dateResolvers } from './date';


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
    Skill,
    EmployeeSkill,
    Assignment,
    Chemistry,
    Date,
  ],
  resolvers: merge(
    employeeResolvers,
    projectResolvers,
    userResolvers,
    skillResolvers,
    employeeSkillResolvers,
    assignmentResolvers,
    chemistryResolvers,
    dateResolvers,
  ),
});
