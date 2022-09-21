

exports.test = function (req, res) {
  res.send('Olá! Teste ao Controller');
};

// TODO: listar pontos de interesse da BD
exports.details = function (req, res) {
  PI.find({}).then(function(pi){
  res.send(pi);
  });
};

const PI = require('../models/professor');
// adicionar novo ponto de interesse
exports.create = function (req, res) {
// cria novo ‘pi’ na BD a partir do request, depois, devolve o
//‘pi’ criado ao cliente
PI.create(req.body).then(function(pi){
res.send(pi);
});
};

// TODO: atualizar ponto de interesse
exports.update = function (req, res, next) {
 PI.findByIdAndUpdate({_id: req.params.id},
                  req.body).then(function(){
   PI.findOne({_id: req.params.id}).then(function(pi){
     res.send(pi);
   });
 }).catch(next);
};
// TODO: apagar ponto de interesse
exports.delete = function (req, res, next) {
// apaga ‘pi’ da BD, depois, devolve o ‘pi’ apagado ao cliente
PI.findByIdAndRemove({_id: req.params.id}).then(function(pi){
  res.send(pi);
}).catch(next);
};