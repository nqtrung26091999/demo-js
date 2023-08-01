require('dotenv').config()

var express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
var userRouter = require('./routes/user.route');
var authRouter = require('./routes/auth.route');
var productRouter = require('./routes/product.route');

var authMiddleware = require('./middlewares/auth.middleware')

var port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET)); // for parsing

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', {
        name: "TRUNG",
    });
});

app.use('/users', authMiddleware.requiredAuth, userRouter);
app.use('/auth', authRouter);
app.use('/products', productRouter);

app.listen(port, function() {
    console.log('listening on port ' + port);
});