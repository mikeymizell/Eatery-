const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class FoodGroups extends Model {}

FoodGroups.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        group_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize, 
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'food_groups'
    }
)

module.exports = FoodGroups;