const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
// no es necesario require('ejs') pero si su instalacion npm i ejs

const server = express();

//IMPORTANDO NUESTRAS RUTAS
const routes = require('./route.js');
const routesApi = require('./route-api.js');

//SETTINGS - CONFIGURACION (AGREGAR VARIABLES)
server.set('appName','server en express');
//para obtener server.set('appName')


//MOTOR DE PLANTILLAS , PARECIDO A BLADE
server.set('views','./views');//indicamos vistas dentro de ./views
server.set('view engine','ejs'); //indicamos el motor de plantillas ejs


//MIDDLEWARE
server.use((req,res,next)=>{
    //console.log('request url',req.url);
    next();//para que no se quede en el middleware
});


//MODULO PARA MIDDLEWARE : MORGAN
server.use(morgan('dev'));
//muestra GET /login 304 2.226 ms - -


// requiriendo RUTAS
server.use(routes);
server.use('/api',routesApi);

//cualquiera ruta 
server.get('*',(req,res)=>{
    res.send('Archivo no encontrado');
})

server.listen(3000, ()=>{
    console.log('Server puerto 3000'.yellow);
    //console.log(server.set('appName'));
});


//revisar nodemon, passport,forever