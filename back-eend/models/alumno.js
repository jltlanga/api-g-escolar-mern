
const mongoose = require('mongoose');
const Matricula = require ('./matricula');

const PISchema = new mongoose.Schema ({
  Nome: String,
  Email: String,
  Turma: String,
  Sessao: String,
  Matricula: [{type: Number, ref: 'matricula'}],
});

PISchema.statics = {
  get: function(query, callback) {
      this.findOne(query)
      .exec(callback);
  },
  getAll: function(query, callback) {
      let order = 'createdAl'
      if (query.field !== undefined){
          order = query.field;
          if (query.order !== '1') {
              order = "-"+query.field;
          }
      }
      this.find({})
      .sort(order)
      .exec(callback);
  }
}

module.exports = mongoose.model('alumno', PISchema, 'alumnos')
