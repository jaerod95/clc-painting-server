module.exports = (sequelize, DataTypes) => {
  const EmployeeSkill = sequelize.define('EmployeeSkill', {
    skillLevel: {
      type: DataTypes.INTEGER,
    },
  }, {});


  EmployeeSkill.associate = function (models) {
    EmployeeSkill.belongsTo(models.Employee);
    EmployeeSkill.belongsTo(models.Skill);
  };

  return EmployeeSkill;
};
