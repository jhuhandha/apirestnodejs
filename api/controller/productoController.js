const Producto = require("./../models/productoModels");
const fileUpload = require('express-fileupload');

const path = require("path");

let guardar = (req, res) => {

    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    let imagen = req.files.imagen;

    imagen.mv(`uploads/productos/${imagen.name}`, (err) => {
        if (err)
          return res.status(500).send(err);

        let body = req.body;

        let producto = new Producto({
            nombre: body.nombre,
            categoria : body.categoria,
            precio : body.precio,
            cantidad : body.cantidad,
            imagen : imagen.name
        }); 

        producto.save((err, productoNew)=>{
            if (err)
                return res.status(500).send(err);

            return res.json({
                ok: true,
                producto : productoNew
            });
        })

      });

}

let listar = (req, res) => {
    Producto.find({}).exec((err, datos)=>{
        return res.json(datos);
    });
}

let ver_imagen = (req, res) => {

    let ruta = path.join(__dirname, './../../uploads/productos/', req.params.img);

    return res.sendFile(ruta);
}

module.exports = {
    guardar,
    listar,
    ver_imagen
}