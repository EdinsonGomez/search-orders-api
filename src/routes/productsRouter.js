const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', (req, res) => productsController.getProducts(req, res));
router.get('/:id', (req, res) => productsController.getProductById(req, res));

module.exports = router;
