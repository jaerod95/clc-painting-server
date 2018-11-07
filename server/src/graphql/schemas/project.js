import db from '../../models';

const { Project } = db;

export const resolvers = {
  Query: {
    project(_, args) {
      return Project.find({
        where: args,
        include: [
          {
            model: db.User,
            as: 'user',
          },
          {
            model: db.Assignment,
            as: 'assignments',
          },
        ],
      });
    },
  },
  Mutation: {
    createProject(_, args) {
      const projArgs = args;
      db.User.findOne({ where: { id: projArgs.bossUserId } }).then(user => {
        projArgs.isFinished = false;
        delete projArgs.bossUserId;
        return Project.create(projArgs).then(project => {
          project.setUser(user);
        });
      });
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
  createProject(title: String!, address: String!, description: String!, priority: Int!, bossUserId: Int!): Project
  updateProject(id: Int!, title: String): Project
  deleteProject(id: Int!): Int
}

type Project {
  id: Int
  title: String
  owner: String
  assignments: [Assignment]
  user: User
}
`;
