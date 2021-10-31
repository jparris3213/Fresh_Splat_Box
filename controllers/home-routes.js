const { Model } = require('sequelize');

const router = require('express').Router();
const F_Scroll = require('../models/Formal_Scroll');

// Route to retrieve all Formal Scrolls in Database

router.get('/', async (req, res) => {
    const scrolldata = await F_Scroll.findAll().catch((err) => {
        res.json(err);
    });
    const scrolls = scrolldata.map((scroll) => scroll.get({ plain: true }));
    res.render('all', {scrolls});
});

//Route: One Scroll by id

router.get('/formal_scroll/:id', async (req, res) => {
    try{
        const scrolldata = await F_Scroll.findByPk(req.params.id);
        if(!scrolldata) {
            res.status(404).json({message: 'Scroll Does Not Exist'});
            return;
        }
        const scroll = scrolldata.get({ plain: true });
        res.render('scroll', scroll);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;