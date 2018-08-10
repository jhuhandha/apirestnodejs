const express = require('express');

var app = express();

app.use("/api", require("./usuarioRoutes"));
app.use("/api", require("./productoRoutes"));
app.use("/api", require("./clienteRoutes"));
app.use("/api", require("./ventaRoutes"));

module.exports = app;