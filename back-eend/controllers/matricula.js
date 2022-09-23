const MA = require('../models/matricula');

exports.details = function (req, res) {
  MA.find(req.query, function(err, result) {
    var respuesta = {};
    if (!err) {
      respuesta = result;
    } else {
      respuesta = { success: false, error: err};
    }
    return res.json(respuesta);
    });
    };


exports.create = function (req, res) {

  MA.create(req.body).then(function(pi){
  res.send(pi);
  });
};

// TODO: atualizar ponto de interesse
exports.update = function (req, res, next) {
  MA.findByIdAndUpdate({_id: req.params.id},
    req.body).then(function(){
    MA.findOne({_id: req.params.id}).then(function(pi){
     res.send(pi);
   });
 }).catch(next);
};
// TODO: apagar ponto de interesse
exports.delete = function (req, res, next) {
// apaga ‘pi’ da BD, depois, devolve o ‘pi’ apagado ao cliente
MA.findByIdAndRemove({_id: req.params.id}).then(function(pi){
  res.send(pi);
}).catch(next);
};