import db from '../../models';

const { Assignment } = db;

export const resolvers = {
  Query: {
    assignment(_, args) {
      return Assignment.find({
        where: args,
        include: [
          {
            model: db.Employee,
            as: 'employee',
          },
          {
            model: db.Project,
            as: 'project',
          },
        ],
      });
    },
  },
  Mutation: {
    createAssignment(_, args) {
      const assignArgs = args;
      db.Employee.findOne({ where: { id: assignArgs.employeeId } }).then(employee => {
        db.Project.findOne({ where: { id: assignArgs.projectId } }).then(project => {
          Assignment.create(assignArgs).then(assignment => {
            assignment.setEmployee(employee);
            assignment.setProject(project);
          });
        });
      });
    },
    async updateAssignment(_, args) {
      await Assignment.update(args, {
        where: { id: args.id },
      });
      return Assignment.find({ where: args });
    },
    deleteAssignment(_, args) {
      return Assignment.destroy({
        where: { id: args.id },
      });
    },
  },
};

export const typeDefs = `

extend type Query {
    assignment(id:Int!): Assignment
}

extend type Mutation {
  createAssignment(startTime: Int!, endTime: Int!, employeeId: Int!, projectId: Int!): Assignment
  updateAssignment(id: Int!, name: String): Assignment
  deleteAssignment(id: Int!): Assignment
}

type Assignment {
    id: Int
    startTime: Int
    endTime: Int
    employee: Employee
    project: Project
}
`;
