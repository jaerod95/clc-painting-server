module.exports = function employee(sequelize, DataTypes) {
  const Employee = sequelize.define('Employee', {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    inAttendance: {
      type: DataTypes.BOOLEAN,
    },
  }, {});

  Employee.associate = function associate(models) {
    Employee.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    Employee.hasMany(models.EmployeeSkill, { as: 'employeeSkills' });
    Employee.hasMany(models.Hours, { as: 'hours' });
    Employee.hasMany(models.Assignment, { as: 'assignments' });
    Employee.hasMany(models.Chemistry, { as: 'chemistry' });
  };

  return Employee;
};
