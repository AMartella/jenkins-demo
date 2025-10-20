const publicController = require('../controllers/publicController');

module.exports = (router) => {
    router.get("/", publicController.home);
    router.get("/redis-cache", publicController.cache);
}