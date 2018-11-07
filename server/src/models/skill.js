module.exports = function skill(sequelize, DataTypes) {
  const Skill = sequelize.define('Skill', {
    name: {
      type: DataTypes.STRING,
    },
  }, {});

  Skill.associate = function associate(models) {
    Skill.hasMany(models.EmployeeSkill);
  };

  return Skill;
};
