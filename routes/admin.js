const express = require('express');
const router = express.Router();

let products = [];

router.get('/add-product', (req, res) => {
    res.render('add-product', {
        pageTitle: 'Add Product Page',
        path: '/add-product'
    });
});

router.post('/add-product', (req, res) => {
    products.push({'productName': req.body.productName});
    res.redirect('/shop');
})

exports.routes = router;
exports.products = products;