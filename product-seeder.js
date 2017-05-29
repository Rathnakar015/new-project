var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: '/images/biryani.jpg',
        title: 'Biryani',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath: '/images/curry.jpg',
        title: 'Curries',
        description: 'Also awesome? But of course it was better in vanilla ...',
        price: 20
    }),
    new Product({
        imagePath: '/images/soups.jpg',
        title: 'Soups',
        description: 'Meh ... nah, it\'s okay I guess',
        price: 40
    }),
    new Product({
        imagePath: '/images/starter.jpg',
        title: 'Starters',
        description: 'Now that is super awesome!',
        price: 15
    }),
    new Product({
        imagePath: '/images/special.jpg',
        title: 'Specials',
        description: 'I died!',
        price: 50
    })
];


var done = 0;
for (var i = 0; i < products.length; i++) {

    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}