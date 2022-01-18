const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

//auth process ....session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
//Reading through the Post request
app.use(express.urlencoded());
//Breaks cookies Data into smaller and according to our needs
app.use(cookieParser());
//Showing Static files
app.use(express.static('./assets'));
//Telling express about view engine and where is our view files
app.set('view engine', 'ejs');
app.set('views', './views');
//Entry Point

//session cookie
app.use(session({
    name: 'Social',
    secret: '**************'
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100);
    }
}));

app.use(passport.initialize());
app.use(passport.session());
//-----------------------------

app.use('/', require('./routes'));

app.listen(port, function(err) {
    if (err) {
        console.log('Error in launching server', err);
        return;
    }
    console.log('Server is up and running on port number ', port);
});