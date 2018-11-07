import db from '../../models';

const { Skill } = db;

export const resolvers = {
  Query: {
    skill(_, args) {
      return Skill.find({
        where: args,
      });
    },
  },
  Mutation: {
    createSkill(_, args) {
      return Skill.create(args);
    },
    async updateSkill(_, args) {
      await Skill.update(args, {
        where: { id: args.id },
      });
      return Skill.find({ where: args });
    },
    deleteSkill(_, args) {
      return Skill.destroy({
        where: { id: args.id },
      });
    },
  },
};

export const typeDefs = `

extend type Query {
    skill(id:Int!): Skill
}

extend type Mutation {
  createSkill(name: String!): Skill
  updateSkill(id: Int!, name: String): Skill
  deleteSkill(id: Int!): Int
}

type Skill {
    id: Int
    name: String
}
`;
