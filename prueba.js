const http = require('http');

const colors = require('colors');

//SERVIDOR SIMPLE
/*
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`<h1>Hola mundo desde Node</h1>`);
    res.end();
}).listen(3000); */

//SERVIDOR SIMPLE SEPARADO POR FUNCION
/** 
const handleServer = function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`<h1>Hola mundo desde NodeJS</h1>`);
    res.writeHead(200,{'Content-Type':'text/plane'});
    res.write(`Hola mundo desde NodeJS`);
    res.end();
}
http.createServer(handleServer).listen(3000);
*/

//SERVIDOR SEPARADOR POR CONSTANTES
const handleServer = function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`<h1>Hola mundo</h1>`);
    res.end();
}
//toma por defecto la ruta '/' 




const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log('Servidor en puerto 3000'.yellow);
});


//correr comandos por defectos 
//npm (nombre_script)  // npm start


//correr comandos desconocidos propios
//npm run (nombre_script) //npm run dev



