const Usuario = require("./../models/usuarioModels");
const bcrypt = require("bcrypt");

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

    Usuario.findById(req.params.id).exec((err, datos)=>{
        return res.json({
            datos
        });
    });

}

let modificar = (req, res) => {

    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        correo: req.body.correo,
        usuario: req.body.usuario,
        clave: bcrypt.hashSync(req.body.clave, 10)
    }

    Usuario.findByIdAndUpdate(req.params.id, usuario, { new : true }, (err, usuarioNew)=>{

        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            usuarioNew
        });

    });

}

let eliminar = (req, res) => {

    Usuario.findByIdAndUpdate(req.params.id, {estado : req.params.estado}, { new : true }, (err, usuarioNew)=>{

        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            usuarioNew
        });

    });
}

module.exports = {
    index,
    guardar,
    ver,
    modificar,
    eliminar
}

