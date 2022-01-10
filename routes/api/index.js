const router = require('express').Router();

const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipe-routes');
const foodgroupRoutes = require('./foodgroups-route');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/foodgroups', foodgroupRoutes);

module.exports = router;