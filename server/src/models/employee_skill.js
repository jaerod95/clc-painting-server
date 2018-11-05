module.exports = (sequelize, DataTypes) => {
  const EmployeeSkill = sequelize.define('EmployeeSkill', {
    skillLevel: {
      type: DataTypes.INTEGER,
    },
  }, {});
  return EmployeeSkill;
};
