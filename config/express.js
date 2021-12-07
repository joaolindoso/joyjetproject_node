const express = require('express');
const bodyParser = require('body-parser');
var load = require('express-load');

module.exports = function() {
    var app = express();

    // Config views
    app.use(express.static('./assets'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // Middlewares
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    return app;
}
