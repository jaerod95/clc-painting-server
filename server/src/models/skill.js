module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: {
      type: DataTypes.STRING,
    },
  }, {});

  Skill.associate = function (models) {
    Skill.hasMany(models.EmployeeSkill);
  };

  return Skill;
};
