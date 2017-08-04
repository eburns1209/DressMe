//dependencies//
var path = require('path');
var fs = require('fs');
var express = require('express');

//app//
var app = express();

//imports//
var indexRoutes = require('./routes/index');

//view engine//
app.set('view engine','html');
app.engine('html', function (path,options,callbacks){
	fs.readFile('path','utf-8','callback');
});

//middleware//
app.use(express.static(path.join(__dirname, '../client')));

//routes//
app.use('/', indexRoutes);

//error handler//
app.use(function(err,req,res,next){
	res.status (err.status || 500);
});

// //serve app//
// var port = 8000;
// app.listen(port, function() {
// 	console.log('Running at localhost:'+ port);
// });

module.exports = app;