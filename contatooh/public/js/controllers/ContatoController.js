//public/js/controllers/ContatoControllers.js
//injetamos $resource

angular.module('contatooh').controller('ContatoController',
    function($scope, $routeParams, Contato) { 
      //aqui continua no plural, é a rota no lado do servidor
      //var Contato = $resource('/contatos/:id');  Eliminada devido a substituição de factory (service)

      if($routeParams.contatoId) {
      Contato.get({id: $routeParams.contatoId},
        function(contato) {
          $scope.contato = contato;
        },
        function(erro) {
          $scope.mensagem = {
            texto: 'Contato não existe. Novo contato.'
              };
            }
          );
        } else {
          $scope.contato = {};
          $scope.mensagem = {
            texto: 'Novo contato.'
              };
        };

      $scope.salva = function() {
        //lógica de salvamento
        $scope.contato.$save()
          .then(function() {
            $scope.mensagem = {texto: 'salvo com sucesso'};
            //limpa o formulário
            $scope.contato = new Contato();
          })
        .catch(function(erro) {
        $scope.mensagem = {texto: 'Não foi possível salvar'};
        });
      };

      $scope.contato = new Contato();
});

