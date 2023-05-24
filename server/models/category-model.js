const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const Voiture = require("./voiture-model");

const Category = sequelize.define("category", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  categoryImg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Category.hasMany(Voiture, { foreignKey: "categoryId", as: "works" });
Voiture.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

module.exports = Category;
