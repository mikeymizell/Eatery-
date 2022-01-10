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

if (!FoodGroups.group_name) {
    FoodGroups.bulkCreate([
        {
            group_name: 'Breakfast'
        },
        {
            group_name: 'Lunch'
        },
        {
            group_name: 'Dinner'
        },
        {
            group_name: 'Dessert'
        },
        {
            group_name: 'Vegan'
        },
        {
            group_name: 'Vegetarian'
        },
        {
            group_name: 'Pescetarian'
        }
    ])
}

module.exports = FoodGroups;