//Requires 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

// Port
const port = process.env.PORT || 4500;

// Require Routers
const indexRouter = require('./routes/index.router');
const mailRouter = require('./routes/mail.router');


// Middleware
app.use(express.static('./client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Use Routers
app.use('/mail', mailRouter);
app.use('/', indexRouter);

// Listener
app.listen(port, function() {
    console.log('Listening on port ', port);
});

// Exports
exports = module.exports = app;