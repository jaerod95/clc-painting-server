module.exports = function project(sequelize, DataTypes) {
  const Project = sequelize.define('Project', {
    title: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    isFinished: {
      type: DataTypes.BOOLEAN,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
  }, {});

  Project.associate = function associate(models) {
    Project.hasMany(models.Assignment, { as: 'assignments' });
    Project.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };

  return Project;
};
