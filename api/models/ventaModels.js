const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ventaSchema = new Schema({
    fecha : {
        type: Date,
        default: Date.now
    },
    valor_total: Number,
    cliente : {
        type: Schema.Types.ObjectId,
        ref : "Cliente"
    },
    productos : [{
        productos : {
            type: Schema.Types.ObjectId,
            ref : "Producto"
        },
        cantidad : Number
    }]
});

module.exports = mongoose.model("Venta", ventaSchema);