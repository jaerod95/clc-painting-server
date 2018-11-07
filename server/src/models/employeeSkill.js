module.exports = function employeeSkill(sequelize, DataTypes) {
  const EmployeeSkill = sequelize.define('EmployeeSkill', {
    skillLevel: {
      type: DataTypes.INTEGER,
    },
  }, {});


  EmployeeSkill.associate = function associate(models) {
    EmployeeSkill.belongsTo(models.Employee);
    EmployeeSkill.belongsTo(models.Skill);
  };

  return EmployeeSkill;
};
