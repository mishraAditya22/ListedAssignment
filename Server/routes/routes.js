const express = require('express');

//constrollers
const UserController = require('../controllers/UserController');


const routes  = express.Router();

routes.get('/',UserController.Login_btn);
routes.get('/home',UserController.home);
routes.get('/automate',UserController.automate);

module.exports = routes;