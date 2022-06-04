const express = require('express');

const storeController = require('./controllers/storeController');

const router = express.Router();

router.put('/placeOrder', storeController.placeOrder);

module.exports = router;
