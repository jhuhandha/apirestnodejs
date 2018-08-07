const express = require('express');

var app = express();

app.use("/api", require("./usuarioRoutes"));
app.use("/api", require("./productoRoutes"));

module.exports = app;