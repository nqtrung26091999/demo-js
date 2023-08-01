const { parse } = require('dotenv');
var db = require('../db');
module.exports.index = function(req,res) {

    var products = db.get('products').value();

    var page = parseInt(req.query.page) || 1;
    var perPage = 6;
    var begin = (page - 1) * perPage;
    var end = page * perPage;
    
    res.render('products/product', {
        products: products.slice(begin, end)
    });
}
