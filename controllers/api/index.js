const router = require('express').Router();

const scrollRoutes = require('./scroll-routes');

router.use('/formal_scrolls', scrollRoutes);

module.exports = router;