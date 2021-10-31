const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Formal_Scroll extends Model {}

Formal_Scroll.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    scroll_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    school: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    base_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    base_coin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shot_status: {
      type: DataTypes.BOOLEAN,
    },
    component: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //TODO: Add additional columns to this model for Formal Scrolls: 
    //Base SFA spread, Casting Time, Duration, Type, Vessel, Primary/Secondary Component Split, In Play Description, Alteration List
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "formal_scroll",
  }
);

module.exports = Formal_Scroll;
