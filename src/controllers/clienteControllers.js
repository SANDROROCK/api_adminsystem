const Cliente = require('../models/clientes');


module.exports ={


    //Criar novo cliente
    async store (req , res){
        const { nome, email } = req.body;

        const cliente =  await Cliente.create({
            nome,
            email,
            telefone,
            sexo,
            dataNascimento,
            cpf,
            endereco,
            uf,
        });

        return  res.json({
            cliente
        })
    },

    async index (req , res){
       

        const cliente =  await Cliente.find();

        return  res.json({
            cliente
        })
    }





}