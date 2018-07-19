const express = require('express');
const usuarioController = require('./../controller/usuarioController');

var router = express.Router();

router.get("/usuario", usuarioController.index);
router.post("/usuario", usuarioController.guardar);
router.get("/usuario/:id", usuarioController.ver);
router.put("/usuario/:id", usuarioController.modificar);
router.delete("/usuario/:id/:estado", usuarioController.eliminar);

module.exports = router;