const router = require('express').Router();

const usersController = require('../controllers/usersController');



router.get('/', usersController.index);
router.get('/admin', usersController.index);



module.exports = router;
