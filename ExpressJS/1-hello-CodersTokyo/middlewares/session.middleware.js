var shortid = require('shortid');
var db = require('../db');

 module.exports = function(req, res, next) {
 	if(!req.signedCookies.sessionId) {
 		var id = shortid.generate();
 		res.cookie('sessionId', id, {
 			signed: true
 		});
 		db.get('sessions').push({
 			id: id
 		}).write();
 	}

 	next();
 }