
const mongoose = require('mongoose');

const PISchema = new mongoose.Schema ({
  SessaoA: String,
  SessaoB: String,
  SessaoC: String,

});
module.exports = mongoose.model('Turma', PISchema)
