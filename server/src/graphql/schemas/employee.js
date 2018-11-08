import db from '../../models';

const { Employee } = db;

export const resolvers = {
  Query: {
    employee(_, args) {
      return Employee.find({
        where: args,
        include: [
          {
            model: db.User,
            as: 'user',
          },
          {
            model: db.Chemistry,
            as: 'chemistry',
          },
        ],
      });
    },
  },
  Mutation: {
    createEmployee(_, args) {
      const empArgs = args;
      db.User.findOne({ where: { id: empArgs.bossUserId } }).then(user => {
        delete empArgs.bossUserId;
        return Employee.create(empArgs).then(employee => {
          employee.setUser(user);
        });
      });
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
  createEmployee(firstName: String!, lastName: String!, inAttendance: Boolean, bossUserId: Int!): Employee
  updateEmployee(id: Int!, firstName: String, lastName: String, inAttendance: Boolean): Employee
  deleteEmployee(id: Int!): Int
}

type Employee {
    id: Int
    firstName: String
    lastName: String
    inAttendance: Boolean
    user: User
    chemistry: [Chemistry]
}
`;
