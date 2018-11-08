module.exports = function employeeSkill(sequelize, DataTypes) {
  const EmployeeSkill = sequelize.define('EmployeeSkill', {
    skillLevel: {
      type: DataTypes.INTEGER,
    },
  }, {});


  EmployeeSkill.associate = function associate(models) {
    EmployeeSkill.belongsTo(models.Employee, { as: 'employee', foreignKey: 'employeeId' });
    EmployeeSkill.belongsTo(models.Skill, { as: 'skill', foreignKey: 'skillId' });
  };

  return EmployeeSkill;
};
