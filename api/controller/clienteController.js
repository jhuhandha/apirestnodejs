const Cliente = require("./../models/clienteModels");

let listar = (req, res) => {

    Cliente.find({}).exec((err, datos)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(datos);
    })

}

module.exports = {
    listar
}