//public/js/controllers/ContatosController.js

angular.module('contatooh').controller('ContatosController', 
    function($scope, $http){
      $scope.contatos = [];
      $scope.total = 0;    
      $scope.incrementa = function(){
        $scope.total++;
      };

      $http.get('/contatos').success( function(data) {
        $scope.contatos = data;
      }).error(function(statusText) {
        console.log("Não foi possível obter a lista de contatos");
        console.log(statusText);
      });

    $scope.filtro = "";

});
