const Order = require('../models/orderModel');

exports.placeOrder = async (req, res, next) => {
  const orderData = {
    size: req.body.size,
    color: req.body.color,
    quantity: req.body.quantity,
    orderNumber: req.body.orderNumber,
    repeatRate: req.body.repeatRate,
    user: req.body.user,
  };

  const order = await Order.create(orderData);

  res.status(201).json({ status: 'success', data: order });
};
