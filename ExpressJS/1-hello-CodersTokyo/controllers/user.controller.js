var db = require('../db');
var shortid = require('shortid');
var User = require('../models/user.model');

module.exports = {
    index : function(req, res) {
        User.find({}).then(function(users) {
            res.render('users/index', {
                users: users
            });
        })
    },

    search : function(req, res) {
        var q = req.query.q;
        User.find({ name: q }).then(function(users) {
            res.render('users/index', {
                users: users
            })
        });
    },

    create : function(req, res) {
        console.log(req.cookies);
        res.render('users/create');
    },

    postCreate : function(req, res) {
        var filePath = req.file.path;
        req.body.avatar = filePath.split('\\').slice(1).join('\\');
        req.body.id = shortid.generate();
        db.get('users').push(req.body).write();
        res.redirect('/users');
    },

    get : function(req, res) {
        var id = req.params.id;
        var user = db.get('users')
        .find({ id: id })
        .value()
    
        res.render('users/view', {
            users: user
        });
    }
}
