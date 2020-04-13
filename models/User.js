const Sequelize = require("sequelize");

module.exports = sequelize.define("tweet",{

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
    }
});