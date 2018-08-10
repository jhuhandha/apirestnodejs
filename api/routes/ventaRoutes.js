const express = require('express');
const VentaController = require("./../controller/ventaController");

var router = express.Router();

router.post("/venta", VentaController.guardar);
router.get("/venta", VentaController.listar);

module.exports = router;