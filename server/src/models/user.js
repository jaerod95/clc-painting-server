const hooks = require('../mixins/transactionHooks');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      guid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        unique: true,
      },
      cryptedPassword: DataTypes.STRING,
      authType: {
        type: DataTypes.STRING,
        defaultValue: 'APP_USER',
      },
    },
  );
  User.associate = models => {
    User.hasMany(models.Contact, { as: 'contacts', foreignKey: 'userGuid' });
    User.hasMany(models.Tag, { as: 'tags', foreignKey: 'userGuid' });
    User.hasMany(models.UserTransaction, {
      as: 'transactions',
      foreignKey: 'userGuid',
    });
    User.hasMany(models.Campaign, { as: 'campaigns', foreignKey: 'userGuid' });
  };
  return User;
};
