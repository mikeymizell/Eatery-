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

router.post('/', (req, res) => {
    FoodGroups.create({
        group_name: req.body.group_name
    })
        .then(dbFGData => res.json(dbFGData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.delete('/', (req, res) => {
    FoodGroups.destroy({
        where: {},
        truncate: true
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