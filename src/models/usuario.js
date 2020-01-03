const mongoose = require('mongoose');


const userSchema = mongoose.Schema({

    nome:String,
    senha:String,
    email:String

});


module.exports = mongoose.model('User',userSchema);