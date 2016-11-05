var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;  //process.env.Port from heroku

var middleware = require('./middleware.js');

// app.get('/', function(req, res){
//     res.send('Hello express!');
// });

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(reg, res){
  res.send('About Us!');
});

//console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
  console.log('express server started on '+PORT);
});
