const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
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
app.use('/', require('./routes'));

app.listen(port, function(err) {
    if (err) {
        console.log('Error in launching server', err);
        return;
    }
    console.log('Server is up and running on port number ', port);
});