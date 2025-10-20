const publicController = require('../controllers/publicController');

module.exports = (router) => {
    router.get("/", publicController.home);
}