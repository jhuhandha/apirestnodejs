const express = require('express');

var app = express();

app.use("/api", require("./usuarioRoutes"));

module.exports = app;