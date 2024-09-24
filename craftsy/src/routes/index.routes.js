const router = require('express').Router();

const indexController = require('../controllers/indexController');



router.get('/', indexController.index);
router.get('/admin', indexController.index);



module.exports = router;
