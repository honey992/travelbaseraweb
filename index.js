var express 		= require('express');
var logger 			= require('morgan');
var path 			= require('path');
var app 			= express();
var server 			= require('http').createServer(app);

app.use(logger('dev'));

app.set('port', process.env.PORT || 3000); 

app.set('env','development')  ; 
app.set('views', path.join(__dirname, '/public'));
app.use(express.static(path.join(__dirname, '/public')));

 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 
 
 
	app.all('*', function(req, res) {
	    res.sendfile('index.html');  
	});

server.on('error', function(err){
	process.exit(1);
}).listen(app.get('port'), function(){
	console.log('App is running at: '+app.get('port'))
});