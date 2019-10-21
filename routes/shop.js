const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res) => {
    res.render('shop', {
        pageTitle: 'Shop Page',
        prods: adminData.products,
        path: '/shop'
    });
});


module.exports = router;