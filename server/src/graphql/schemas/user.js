import db from '../../models';

const { User } = db;

// Not sure how all this should actually play out fo the User
export const resolvers = {
  Query: {
    user(_, args) {
      return User.find({
        where: args,
        include: [
          {
            model: db.Employee,
            as: 'employees',
          },
          {
            model: db.Project,
            as: 'projects',
          },
        ],
      });
    },
  },
  Mutation: {
    createUser(_, args) {
      return User.create(args);
    },
    async updateUser(_, args) {
      await User.update(args, {
        where: { id: args.id },
      });
      return User.find({ where: args });
    },
    deleteUser(_, args) {
      return User.destroy({
        where: { id: args.id },
      });
    },
  },
};

export const typeDefs = `

extend type Query {
  user(id:Int!): User
}

extend type Mutation {
  createUser(username: String!, password: String!, firstName: String!, lastName: String!): User
  updateUser(id: Int!): User
  deleteUser(id: Int!): Int
}

type User {
  id: Int
  firstName: String
  lastName: String
  employees: [Employee]
  projects: [Project]
}
`;
