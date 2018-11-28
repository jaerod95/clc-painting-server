import db from '../../models';

const { EmployeeSkill } = db;

export const resolvers = {
  Query: {
    employeeSkill(_, args) {
      return EmployeeSkill.find({
        where: args,
        include: [
          {
            model: db.Employee,
            as: 'employee',
          },
          {
            model: db.Skill,
            as: 'skill',
          },
        ],
      });
    },
  },
  Mutation: {
    createEmployeeSkill(_, args) {
      const skillArgs = args;
      db.Employee.findOne({ where: { id: args.employeeId } }).then(employee => {
        db.Skill.findOne({ where: { id: args.skillId } }).then(skill => {
          EmployeeSkill.create(skillArgs).then(employeeSkill => {
            employeeSkill.setEmployee(employee);
            employeeSkill.setSkill(skill);
          });
        });
      });
    },
    async updateEmployeeSkill(_, args) {
      await EmployeeSkill.update(args, {
        where: { id: args.id },
      });
      return EmployeeSkill.find({ where: args });
    },
    deleteEmployeeSkill(_, args) {
      return EmployeeSkill.destroy({
        where: { id: args.id },
      });
    },
  },
};

export const typeDefs = `

extend type Query {
    employeeSkill(id:Int!): Skill
}

extend type Mutation {
  createEmployeeSkill(employeeId: Int!, skillId: Int!, skillLevel: Int!): Skill
  updateEmployeeSkill(id: Int!, skillLevel: Int): Skill
  deleteEmployeeSkill(id: Int!): Int
}

type EmployeeSkill {
    id: Int
    employee: Employee
    skill: Skill
    skillLevel: Int
}
`;
