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

let validar_cantidad = async  (productos, callback) => {

    let productos_id = [];
    productos.forEach(element => {
        productos_id.push(element.producto_id);
    });

    Producto.find({})
        .where("_id").in(productos_id)
        .exec((err, data) => {

            let respuesta = [];

            data.forEach(e => {

                let cantidad = productos.find(p => p.producto_id == e._id).cantidad;

                if (cantidad <= e.cantidad) {

                    cantidad_nueva = e.cantidad - cantidad;

                    // let modifico = await Producto.findByIdAndUpdate(e._id, {
                    //     cantidad: cantidad_nueva
                    // });

                    // if(modifico != false){
                        respuesta.push({
                            productos: e._id,
                            cantidad: cantidad
                        });
                    // }

                    console.log(respuesta);
                }
            })
            
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