import db from '../../models';

const { User } = db;

// Not sure how all this should actually play out fo the User
export const resolvers = {
  Query: {
    user(_, args) {
      return User.find({
        where: args,
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
  createUser(firstName: String!): User
  updateUser(id: Int!): User
  deleteUser(id: Int!): Int
}

type User {
  id: Int
  firstName: String
}
`;
