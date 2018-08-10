const express = require('express');
const ClienteController = require("./../controller/clienteController");

var router = express.Router();

router.get("/cliente", ClienteController.listar);

module.exports = router;