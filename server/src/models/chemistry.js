module.exports = (sequelize, DataTypes) => {
  const Chemistry = sequelize.define('Chemistry', {
    skillLevel: {
      type: DataTypes.INTEGER,
    },
  }, {});
  return Chemistry;
};
