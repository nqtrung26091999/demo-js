require('dotenv').config()

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer  = require('multer');
var csurf = require('csurf');

var upload = multer({ dest: 'public/uploads/' });
var app = express();
var userRouter = require('./routes/user.route');
var authRouter = require('./routes/auth.route');
var productRouter = require('./routes/product.route');
var cartRouter = require('./routes/cart.router');
var transferRouter = require('./routes/transfer.router')

var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');

var port = 3000;


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET)); // for parsing
app.use(sessionMiddleware);
app.use(csurf({ cookie:true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', {
        name: "TRUNG",
    });
});

app.use('/users', upload.single('avatar'), authMiddleware.requiredAuth, userRouter);
app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/transfer', authMiddleware.requiredAuth, transferRouter);

app.listen(port, function() {
    console.log('listening on port ' + port);
});