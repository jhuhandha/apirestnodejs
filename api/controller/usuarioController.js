var Usuario = require("./../models/usuarioModels");
var bcrypt = require("bcrypt");

let index = (req, res) => {

    Usuario.find({}).exec((err, datos)=>{

        return res.json({
            datos
        });

    });

}

let guardar = (req, res) => {
    
    let usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        correo: req.body.correo,
        usuario: req.body.usuario,
        clave: bcrypt.hashSync(req.body.clave, 10)
    });
    
    usuario.save((err, usuarioNew)=>{

        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.status(201).json({
            ok: true,
            usuario: usuarioNew
        });

    });
}

let ver = (req, res) => {


}

let modificar = (req, res) => {


}

let eliminar = (req, res) => {


}

module.exports = {
    index,
    guardar,
    ver,
    modificar,
    eliminar
}

