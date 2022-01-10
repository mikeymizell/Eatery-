const router = require('express').Router();
const { FoodGroups } = require('../../models');

router.get('/', (req, res) => {
    FoodGroups.findAll({})
        .then(dbFGData => res.json(dbFGData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.delete('/:id', (req, res) => {
    FoodGroups.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbFGData => {
            if (!dbFGData) {
                res.status(404).json({ message: 'No food group found with this id' });
                return;
            }
            res.json(dbFGData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;