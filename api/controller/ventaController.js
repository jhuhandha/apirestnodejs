const Venta = require("./../models/ventaModels");
const Producto = require("./../models/productoModels");

let guardar = async (req, res) => {

    let body = req.body;

    validar_cantidad(body.productos_detalle, (respuesta) => {

        if (respuesta == false)
            return res.json({
                ok: false,
                mensaje: "No hay productos para guardar"
            });


        let venta = new Venta({
            valor_total: body.total,
            cliente: body.cliente,
            productos: respuesta
        });

        venta.save((err, ventaNew) => {

            if (err)
                return res.json({
                    ok: false,
                    err
                });

            res.json({
                ok: true,
                ventaNew
            });
        })
    })


}

let validar_cantidad = async (productos, callback) => {

    let productos_id = [];
    productos.forEach(element => {
        productos_id.push(element.producto_id);
    });

    let respuesta = [];

    Producto.find({})
        .where("_id").in(productos_id)
        .exec(async (err, data) => {

            for(let i = 0; i < data.length; i++){

                let cantidad = productos.find(p => p.producto_id == data[i]._id).cantidad;

                if (cantidad <= data[i].cantidad) {

                    cantidad_nueva = data[i].cantidad - cantidad;

                    let modifico = await Producto.findByIdAndUpdate(data[i]._id, {
                        cantidad: cantidad_nueva
                    });

                    if (modifico != false) {
                        respuesta.push({
                            productos: data[i]._id,
                            cantidad: cantidad
                        });
                    }
                }
            }

            callback(respuesta.length == 0 ? false : respuesta);

        })
}

let listar = (req, res) => {
    Venta.find({})
        .populate("cliente")
        .populate("productos.productos")
        .exec((err, data) => {
            res.json(data);
        });
}

module.exports = {
    guardar,
    listar
}