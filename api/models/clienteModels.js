const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let clienteSchema = new Schema({
    nombre : String,
    direccion : String,
    telefono : String
});

module.exports = mongoose.model("Cliente", clienteSchema);