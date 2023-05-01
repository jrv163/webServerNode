const http = require('http');

http.createServer( (req, res) => {
    // La req es lo que se esta solicitando por part del cliente y 
    // la res es lo que mi servidor le está respondiendo al cliente.

    //res.writeHead(404)



    res.write('Hola Mundo');
    res.end();
})
.listen( 8080 ); // puesrto 8080 particular para pruebas web

console.log('Escuchando en el puerto ', 8080);