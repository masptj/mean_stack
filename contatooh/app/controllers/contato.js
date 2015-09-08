//app/controllers/contato.js

var contatos = [
  {_id: 1, 
    nome: 'Contato exemplo 1',
    email: 'cont1@empresa.com.br'
  },
  {_id: 2, 
    nome: 'Contato exemplo 2',
    email: 'cont2@empresa.com.br'
  },  
  {_id: 3, 
    nome: 'Contato exemplo 3',
    email: 'cont3@empresa.com.br'
  },  
  {_id: 4, 
    nome: 'Contato exemplo 4',
    email: 'cont4@empresa.com.br'
  }
];

module.exports = function() {
  var controller = {};
  controller.listaContatos = function(req, res) {
    res.json(contatos);
  };
  return controller;
};


