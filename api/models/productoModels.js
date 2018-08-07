const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre : String,
    precio : Number,
    categoria : String,
    cantidad : Number,
    imagen : String
});

module.exports = mongoose.model("Producto", productoSchema);