require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Bienvenido al API REST del SENA');
});

app.use(require("./routes/indexRoutes"));

mongoose.connect('mongodb://localhost:27017/tienda', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Se conecto");
});

app.listen(process.env.PORT, function () {
    console.log('Example app listening on port ');
});