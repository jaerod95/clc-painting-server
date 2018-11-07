module.exports = function user(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  }, {});

  User.associate = function associate(models) {
    User.hasMany(models.Employee, { as: 'employees' });
    User.hasMany(models.Project, { as: 'projects' });
  };

  return User;
};
