var express = require('express');
var router = express.Router();

var Order = require('../models/order');
var Cart = require('../models/cart');



router.get('/kitchen', function (req, res, next) {
    Order.find({user: req.user}, function(err, orders) {
        if (err) {
            return res.write('Error!');
        }
        var cart;
        orders.forEach(function(order) {
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        });
        res.render('user/kitchen', { orders: orders });
    });
});



router.use('/index',  function (req, res, next) {
    next();
});




module.exports = router;

