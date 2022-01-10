const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Recipe extends Model {
    static upvote(body, models) {
        return models.Vote.create({
            user_id: body.user_id,
            recipe_id: body.recipe_id
        })
            .then(() => {
                return Recipe.findOne({
                    where: {
                        id: body.recipe_id
                    },
                    attributes: [
                        'id', 
                        'recipe_name', 
                        'ingredients', 
                        'instructions',
                        [
                            sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'), 
                            'vote_count'
                        ]
                    ]
                })
            })
    }
}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        foodgroup_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'food_groups',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        recipe_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize, 
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe'
    }
)

module.exports = Recipe;