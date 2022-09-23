
const mongoose = require('mongoose');

const PISchema = new mongoose.Schema ({
  PCPF: String,
  Nome: String,
  Email: String,
  Turma: String,
  Materia: String,

});
module.exports = mongoose.model('professor', PISchema)
