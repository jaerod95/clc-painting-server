'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmployeeSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      skillLevel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      employeeId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Employees",
          key: "id"
        }
      },
      skillId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Skills",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EmployeeSkills')
  }
};
