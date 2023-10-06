const ordersModel = require('../models/ordersModel');

exports.getOrders = (req, res) => {
  let orders = ordersModel.find();

  res.status(200).send(orders);
}

exports.searchOrders = (req, res) => {
  const queryParams = {
    order: +req.query.order,
    document_type: req.query.document_type,
    document: req.query.document
  }

  const existNullQuery = Object.values(queryParams).some((v) => !v);

  if (existNullQuery) {
    res.status(400).send("Completa todos los campos");
  }

  const order = ordersModel.searchOrder(queryParams);

  res.status(200).send(order);
}

exports.getOrderDetails = (req, res) => {
  const id = req.params.id;
  const order = ordersModel.findById(id);

  if (!order) {
    res.status(400).send('No se pudo encontrar la orden');
  }

  res.status(200).send(order);
}