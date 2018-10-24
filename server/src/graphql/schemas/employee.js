import db from '../../models';

const { Employee } = db;

export const resolvers = {
  Query: {
    employee(_, args) {
      return Employee.find({
        where: args,
      });
    },
  },
  Mutation: {
    createEmployee(_, args) {
      return Employee.create(args);
    },
    async updateEmployee(_, args) {
      await Employee.update(args, {
        where: { id: args.id },
      });
      return Employee.find({ where: args });
    },
    deleteEmployee(_, args) {
      return Employee.destroy({
        where: { id: args.id },
      });
    },
  },
};

export const typeDefs = `

extend type Query {
    employee(id:Int!): Employee
}

extend type Mutation {
  createEmployee(firstName: String!): Employee
  updateEmployee(id: Int!, firstName: String): Employee
  deleteEmployee(id: Int!): Int
}

type Employee {
    id: Int
    firstName: String
}
`;
