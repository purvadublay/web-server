var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('private route hit!');
        next();
    },
    logger: function(req, res, next){
      console.log(req.method+ ' ' + req.originalUrl + ' ' + new Date().toString());
      next();
    }
};

// app.get('/', function(req, res){
//     res.send('Hello express!');
// });

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(reg, res){
  res.send('About Us');
});

//console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
  console.log('express server started on '+PORT);
});
