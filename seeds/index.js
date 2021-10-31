const sequelize = require('../config/connection');
const F_Scroll = require('../models/Formal_scroll');
const fscrollData = require ('./scroll_seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await F_Scroll.bulkCreate(fscrollData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();