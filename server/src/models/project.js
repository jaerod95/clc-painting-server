module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: {
      type: DataTypes.STRING,
    },
    owner: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    // I want this attribute to be a boolean but I'm not sure if this is the correct way
    is_finished: {
      type: DataTypes.BOOLEAN,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
  }, {});
  return Project;
};
