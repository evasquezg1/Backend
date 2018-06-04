const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//connectin to db
mongoose.connect('mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1')
	.then(db => console.log('Db connected'))
	.catch(err => console.log(err));

//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

//starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
});