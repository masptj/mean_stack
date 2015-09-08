//config/express.js

var load = require('express-load');
var express = require('express');
//var home = require('../app/routes/home');

module.exports = function() {
  var app = express();

  //variável de ambiente
  app.set('port', 3000);

  //middleware
  app.use(express.static('./public'));
  app.set('view engine','ejs');
  app.set('views','./app/views');


  //home(app);
  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
}


