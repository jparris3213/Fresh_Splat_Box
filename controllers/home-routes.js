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


module.exports = router;