var express = require('express');
var router = express.Router();
var tokenVerify = require('./tokenVerify')

var registrationLogin = require('./registrationLogin');
router.post('/register', registrationLogin.registration);
router.post('/login', registrationLogin.login);

var todo = require('./todo')
router.post('/insertTaskValue', tokenVerify, todo.insertTask)

module.exports = router;