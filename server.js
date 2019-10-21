const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      path = require('path'),
      mainDir = require('./util/path'),
      adminData = require('./routes/admin'),
      shopRoutes = require('./routes/shop');

// parse all requests body
app.use(bodyParser.urlencoded({extended: false}));

// static files
app.use(express.static(path.join(mainDir, 'public')));

// template Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// admin routes
app.use('/admin', adminData.routes);

// shop routes
app.use('/shop', shopRoutes);

// 404 Route
app.use('/', (req, res) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: '/'
    });
})

app.listen(8000)