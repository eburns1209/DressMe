//serve app//
var app = require('../server/server');
var port = 8000;

app.listen(port, function() {
	console.log('Running at localhost:'+ port);
});