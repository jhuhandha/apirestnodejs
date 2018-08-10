//Puerto
process.env.PORT = process.env.PORT || 3000;

process.env.SECRET = process.env.SECRET || "esta-es-mi-clave-secreta";

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

if(process.env.NODE_ENV == 'dev'){
    process.env.MONGOURL = 'mongodb://localhost:27017/tienda';
}else{
    process.env.MONGOURL = 'mongodb://tiendasena:asdfghjkl123@ds119052.mlab.com:19052/tienda';
}