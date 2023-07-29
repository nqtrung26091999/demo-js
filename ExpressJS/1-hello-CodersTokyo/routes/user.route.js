var express = require('express');
var controller = require('../controllers/user.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/id=:id', controller.get);

router.get('/create', controller.create);

router.post('/create', controller.postCreate);

module.exports = router;