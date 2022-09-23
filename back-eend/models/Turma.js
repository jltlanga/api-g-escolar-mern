
const mongoose = require('mongoose');

const PISchema = new mongoose.Schema ({
  Id_Turma: Number,
  Nome: String,
  Secao: String,
  Professor: String,
  Quant_Estudantes: Number
});
module.exports = mongoose.model('Turma', PISchema)
