//public/js/controllers/ContatosController.js

angular.module('contatooh').controller('ContatosController', 
    function(Contato, $scope){

      $scope.mensagem = {texto: ''};

      $scope.contatos = [];

      $scope.filtro = "";

      //var Contato = $resource('/contatos/:id');  Eliminado devido a criação de factory (service)

      function buscaContatos() {
        Contato.query(
          function(contatos) {
            $scope.contatos = contatos
          },
          function(erro) {
            console.log("Não foi possível obter a lista de contatos");
            console.log(erro);
          }
          );
      };

//      $scope.remove = function(contato) {
        //console.log(contato);
//        var promise = Contato.delete({id: contato._id}).$promise;
//        promise
//          .then(buscaContatos)
//          .catch(function(erro) {
//            console.log("Não foi possível remover o contato");
//            console.log(erro);
//          });
//      };

      $scope.remove = function(contato) {
        Contato.delete({id: contato._id},
          buscaContatos,
          function(erro) {
            console.log("Não foi possível remover o contato");
            console.log(erro);
            }
          );
      };

      buscaContatos();

    });
