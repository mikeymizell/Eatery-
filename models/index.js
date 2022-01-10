const User = require('./User');
const FoodGroups = require('./FoodGroups')
const Recipe = require('./Recipe')
const Vote = require('./Vote');

User.hasMany(Recipe, {
    foreignKey: 'user_id'
})

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
})

FoodGroups.hasMany(Recipe, {
    foreignKey: 'foodgroup_id'
})

Recipe.belongsTo(FoodGroups, {
    foreignKey: 'foodgroup_id',
})

User.belongsToMany(Recipe, {
    through: Vote,
    as: 'voted_recipes',
    foreignKey: 'user_id'
})

Recipe.belongsToMany(User, {
    through: Vote,
    as: 'voted_recipes',
    foreignKey: 'recipe_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
})

Vote.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
})

User.hasMany(Vote, {
    foreignKey: 'user_id'
})

Recipe.hasMany(Vote, {
    foreignKey: 'recipe_id'
})

module.exports = { User, FoodGroups, Recipe, Vote };