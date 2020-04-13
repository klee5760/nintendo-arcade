'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      
      id: {
        type: Sequelize.INTEGER (11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

    },

    Usernme: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
  createdAt: Sequelize.DATE,
  opdatedAt: Sequelize.DATE,
    })
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
 
  }
};
