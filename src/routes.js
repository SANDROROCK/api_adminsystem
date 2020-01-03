const express = require('express');
const routes = express.Router();

const auth = require('./midllewares/authenticar');

const ClientesController = require('./controllers/clienteControllers');
const UsuariosController = require('./controllers/usuarioControllers');

//Clientes
routes.post('/clientes/',ClientesController.store);
routes.get('/clientes/',auth,ClientesController.index);




//Usuarios
routes.post('/usuarios/cad',UsuariosController.store);
routes.post('/usuarios/auth',UsuariosController.authenticate);
routes.get('/usuarios/',auth,UsuariosController.index);


module.exports = routes;