const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Voiture = sequelize.define("voiture", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    prix: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = Voiture;
