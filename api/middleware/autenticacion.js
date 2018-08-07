const jwt = require('jsonwebtoken');

let auth = (req, res, next) => {

    let token = req.get("Authorization");

    jwt.verify(token, process.env.SECRET, (err, usuario)=>{

        if(err){
            return res.status(500).json({
                ok: false,
                men: "Token no valido"
            });
        }

        req.usuario = usuario.data;

        next();
    });
}

let token_imagen = (req, res, next) => {

    let token = req.query.token;

    jwt.verify(token, process.env.SECRET, (err, usuario)=>{

        if(err){
            return res.status(500).json({
                ok: false,
                men: "Token no valido"
            });
        }

        req.usuario = usuario.data;

        next();
    });
}

module.exports = {
    auth,
    token_imagen
}