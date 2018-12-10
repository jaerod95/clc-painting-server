import db from '../../models';

const { Project } = db;

export const resolvers = {
  Query: {
    allProjects(_, __) {
      console.log(__);
      return Project.find({
        where: { userId: 0 },
        // include: [
        //   {
        //     model: db.User,
        //     as: 'user',
        //   },
        //   {
        //     model: db.Assignment,
        //     as: 'assignments',
        //   },
        // ],
      });
    },
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
      db.User.findOne({ where: { id: projArgs.userId } }).then(user => {
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
  allProjects(userId: Int!): [Project]
}

extend type Mutation {
  createProject(title: String!, address: String!, description: String!, priority: Int!, isFinished: Boolean, userId: Int!): Project
  updateProject(id: Int!, title: String, address: String, description: String, priority: Int, isFinished: Boolean): Project
  deleteProject(id: Int!): Int
}

type Project {
  id: Int
  title: String
  address: String
  description: String
  priority: Int
  isFinished: Boolean
  assignments: [Assignment]
  user: User
}
`;
