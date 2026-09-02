const express = require('express');
const route = express.Router();

//Controllers
const contatoController = require('./controllers/contatoController');
const homeController = require('./controllers/homeController');
const sobreController = require('./controllers/sobreController');
const usuarioController = require('./controllers/usuarioController');

//Middlewares
const checagemMiddleware = require('./middlewares/checagemMiddleware')
const globalMiddleware = require('./middlewares/globalMiddleware')
const headerMiddleware = require('./middlewares/headerMiddleware')

route.get('/', globalMiddleware,homeController.homeGet);

route.get('/usuario/:id',globalMiddleware, checagemMiddleware ,usuarioController.usuarioGetParams);

route.get('/usuario', usuarioController.usuarioGetHome);

route.post('/usuario', usuarioController.usuarioPost);

route.put('/usuario/:id', usuarioController.usuarioPut);

route.get('/contato', headerMiddleware,contatoController.contatoGet);

route.get('/sobre', sobreController.sobreHome)

module.exports = route
