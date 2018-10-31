import db from '../../models';

const { Project } = db;

export const resolvers = {
  Query: {
    project(_, args) {
      return Project.find({
        where: args,
      });
    },
  },
  Mutation: {
    createProject(_, args) {
      return Project.create(args);
    },
    async updateProject(_, args) {
      await Project.update(args, {
        where: { id: args.id },
      });
      return Project.find({ where: args });
    },
    deleteProject(_, args) {
      return Project.destroy({
        where: { id: args.id },
      });
    },
  },
};

export const typeDefs = `

extend type Query {
  project(id:Int!): Project
}

extend type Mutation {
  createProject(title: String!, owner: String!): Project
  updateProject(id: Int!, title: String): Project
  deleteProject(id: Int!): Int
}

type Project {
  id: Int
  title: String
  owner: String
}
`;
