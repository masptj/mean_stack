//app/routes/contato.js

module.exports = function(app) {
  var controller = app.controllers.contato;
  app.get('/contatos', controller.listaContatos);
};


