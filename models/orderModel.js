const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  size: String,
  color: String,
  quanitity: Number,
  orderNumber: {
    type: String,
    unique: true,
  },
  repeatRate: Number,
  user: mongoose.Schema.ObjectId,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
