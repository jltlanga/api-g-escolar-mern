
const mongoose = require('mongoose');


const PISchema = new mongoose.Schema ({
  ACPF: String,
  Nome: String,
 SNome: String,
 Email: String,
 Turma: String,
Sessao: String,
});

module.exports = mongoose.model('alumno', PISchema)
