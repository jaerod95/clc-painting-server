import db from '../../models';

const { Chemistry } = db;

export const resolvers = {
  Query: {
    chemistry(_, args) {
      return Chemistry.find({
        where: args,
        include: [
          {
            model: db.Employee,
            as: 'employee',
          },
        ],
      });
    },
  },
  Mutation: {
    createChemistry(_, args) {
      const chemArgs = args;
      db.Employee.findOne({ where: { id: chemArgs.firstEmpId } }).then(firstEmployee => {
        Chemistry.create(chemArgs).then(chemistry => {
          chemistry.setEmployee(firstEmployee);
        });
      });
    },
    async updateChemistry(_, args) {
      await Chemistry.update(args, {
        where: { id: args.id },
      });
      return Chemistry.find({ where: args });
    },
    deleteChemistry(_, args) {
      return Chemistry.destroy({
        where: { id: args.id },
      });
    },
  },
};

export const typeDefs = `

extend type Query {
    chemistry(id:Int!): Chemistry
}

extend type Mutation {
  createChemistry(firstEmpId: Int!, otherEmployeeId: Int!, chemistryLevel: Int!): Chemistry
  updateChemistry(id: Int!, name: String): Chemistry
  deleteChemistry(id: Int!): Int
}

type Chemistry {
    id: Int
    chemistryLevel: Int
    employee: Employee
    otherEmployeeId: Int
}
`;
