const mongoose = require('mongoose');

const clienteSchema =  mongoose.Schema({

    nome:String,
    email:String,
    cpf:String,
    endereco:String,
    telefone:String,
    uf:String,
    dataNascimento:String,
    sexo:String,
  
})


module.exports = mongoose.model('Cliente', clienteSchema );


