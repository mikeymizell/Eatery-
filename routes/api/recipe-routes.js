const router = require('express').Router();
const { Recipe, User, FoodGroups, Vote } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Recipe.findAll({
        attributes: [
            'id', 
            'recipe_name', 
            'ingredients', 
            'instructions',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'), 'vote_count']
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: FoodGroups,
                attributes: ['group_name']
            }
        ]
    })
        .then(dbRecipeData => res.json(dbRecipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/:id', (req, res) => {
    Recipe.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: FoodGroups,
                attributes: ['group_name']
            }
        ], 
        attributes: [
            'id', 
            'recipe_name', 
            'ingredients', 
            'instructions',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'), 'vote_count']
        ]
    })
        .then(dbRecipeData => {
            if(!dbRecipeData) {
                res.status(404).json({ message: 'No recipe found with this id' });
                return;
            }
            res.json(dbRecipeData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
})

router.post('/', (req, res) => {
    Recipe.create({
        foodgroup_id: req.body.foodgroup_id,
        user_id: req.body.user_id,
        recipe_name: req.body.recipe_name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    })
        .then(dbRecipeData => res.json(dbRecipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.put('/upvote', (req, res) => {
    Recipe.upvote(req.body, { Vote })
        .then(dbRecipeData => res.json(dbRecipeData))
        .catch(err =>  {
            console.log(err);
            res.status(400).json(err);
        })
})

router.put('/:id', (req, res) => {
    Recipe.update(
        {
            recipe_name: req.body.recipe_name,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbRecipeData => {
            if (!dbRecipeData) {
                res.status(404).json({ message: 'No recipe found with this id' });
                return;
            }
            res.json(dbRecipeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.delete('/:id', (req, res) => {
    Recipe.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbRecipeData => {
            if (!dbRecipeData) {
                res.status(404).json({ message: 'No recipe found with this id' });
                return;
            }
            res.json(dbRecipeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;