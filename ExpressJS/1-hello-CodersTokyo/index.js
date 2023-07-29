var express = require('express');
const bodyParser = require('body-parser');
var app = express();
var userRouter = require('./routes/user.route');
var port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', {
        name: "TRUNG",
    });
});

app.use('/users', userRouter);

app.listen(port, function() {
    console.log('listening on port 3000 ' + port);
});