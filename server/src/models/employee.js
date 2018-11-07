module.exports = (sequelize, DataTypes) => {
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

  Employee.associate = function (models) {
    Employee.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    Employee.hasMany(models.EmployeeSkill);
    Employee.hasMany(models.Hours);
    Employee.hasMany(models.Assignment);
    Employee.hasMany(models.Chemistry, { as: 'chemistry' });
  };

  return Employee;
};
