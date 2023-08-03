var db = require('../db');
var shortid = require('shortid');

module.exports.create = function(req, res, next) {
	res.render('transfer/create', {
		csrfToken: req.csrfToken()
	});
}

module.exports.postCreate = function(req, res, next) {
	var id = shortid.generate();
	var data = {
		id: id,
		account: req.body.account,
		amount: parseInt(req.body.amount),
		userId: req.signedCookies.userid
	}
	db.get('transfers').push(data).write();
	res.redirect('/transfer/create');
}