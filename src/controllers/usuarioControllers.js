const Usuarios = require('../models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const variaveis = require('../../config/variables');
var salt = bcrypt.genSaltSync(10);



module.exports = {

    async store(req, res) {
        const { nome, email, senha } = req.body;

        const senhaCrypto = bcrypt.hashSync(senha, salt);

        const response = await Usuarios.create({
            nome,
            email,
            senha: senhaCrypto

        });
        console.log(senha)
        return res.json({
            response
        })

    },

    async authenticate(req, res) {

        const { email, senha } = req.body;

        const response = await Usuarios.findOne({ email: email });

        if (response) {
            const senhaCrypto = response.senha;
            const usuarioEncontrado = response;
           
            if (bcrypt.compareSync(senha, senhaCrypto)) {

                const token = jwt.sign({ usuarioEncontrado }, variaveis.segurança.varToken);

                res.json({
                    usuarioEncontrado,
                    token
                }
                );


            } else {
                res.send(404, {
                    erro: "Usuario não encontrado"
                })
            }

        }

    },

    async index(req, res) {
        const response = await Usuarios.find();
        res.send(200, res.json(response));
    }
}