
const mongoose = require('mongoose');

const PISchema = new mongoose.Schema ({
  PCPF: String,
  Nome: String,
 SNome: String,
 Email: String,
 Turma: String,
Sessao: String,
Materia: String,

});
module.exports = mongoose.model('professor', PISchema)
