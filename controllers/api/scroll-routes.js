const router = require('express').Router();
const Scroll = require('../../models/Formal_Scroll');

//route to create/add a scroll

router.post('/', async (req, res) => {
    try {
        const scrollData = await Scroll.create({
            scroll_name: req.body.scroll_name,
            school: req.body.school,
            level: req.body.level,
            base_cost: req.body.base_cost,
            base_coin: req.body.base_coin,
            shot_status: req.body.shot_status,
            component: req.body.component,
            notes: req.body.notes,
        });
        res.status(200).json(scrollData);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;