const express = require('express');
const ordersController = require('../controllers/ordersController')

const router = express.Router();

router.get('/', (req, res) => ordersController.getOrders(req, res));
router.get('/search', (req, res) => ordersController.searchOrders(req, res));
router.get('/:id',(req, res) => ordersController.getOrderDetails(req, res));

module.exports = router;