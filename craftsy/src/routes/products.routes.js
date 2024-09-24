const router = require('express').Router();

const productController = require('../controllers/producsController');



router.get('/products', productController.list);
router.get('/:products_id', productController.details);



module.exports = router;
