const md5 = require('md5');
var db = require('../db');

module.exports = {
    login : function(req, res) {
        res.render('auth/login', {
            users: db.get('users').value()
        });
    },

    postLogin : function(req, res) {
        var email = req.body.email;
        var password = req.body.password;

        var user = db.get('users').find({ "email": email }).value();

        if(!user) {
            res.render('auth/login', {
                errors: [
                    "User not found"
                ],
                values: req.body
            });
            return;
        }

        var hashedPassword = md5(password);

        if(user.password !== hashedPassword) {
            res.render('auth/login', {
                errors: [
                    "Password is wrong"
                ],
                values: req.body
            });
            return;
        }
        // console.log(user);
        res.cookie('userid', user.id);
        res.redirect('/users');
    }
}