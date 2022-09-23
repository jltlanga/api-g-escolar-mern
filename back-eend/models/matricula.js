const mongoose = require('mongoose');
const Alumno = require('./alumno');

const MASchema = new mongoose.Schema ({
  Turma: Number,
  Estudante: [{ type: mongoose.SchemaTypes.ObjectId, 
    ref: 'alumno', 
    autopopulate: true}],
  Estado: String,
});

MASchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('matricula', MASchema, 'matricula')