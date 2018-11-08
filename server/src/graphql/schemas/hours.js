import db from '../../models';

const { Hours } = db;

export const resolvers = {
  Query: {
    hours(_, args) {
      return Hours.find({
        where: args,
      });
    },
  },
  Mutation: {
    createHours(_, args) {
      const hoursArgs = args;
      db.Employee.findOne({ where: { id: hoursArgs.employeeId } }).then(employee => {
        delete hoursArgs.employeeId;
        return Hours.create(hoursArgs).then(hours => {
          hours.setEmployee(employee);
        });
      });
      return Hours.create(args);
    },
    async updateHours(_, args) {
      await Hours.update(args, {
        where: { id: args.id },
      });
      return Hours.find({ where: args });
    },
    deleteHours(_, args) {
      return Hours.destroy({
        where: { id: args.id },
      });
    },
  },
};

export const typeDefs = `

extend type Query {
    hours(id:Int!): Hours
}

extend type Mutation {
  createHours(startTime: String!, endTime: String!, day: String!, employeeId: Int!): Hours
  updateHours(id: Int!, startTime: String, endTime: String, day: String): Hours
  deleteHours(id: Int!): Int
}

type Hours {
    id: Int
    startTime: String
    endTime: String
    day: String
}
`;
