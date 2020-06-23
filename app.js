
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });

    let salida = {
        nombre: 'Wirson',
        edad: 31,
        url: req.url

    }

    //res.write('Hello there');
    res.write(JSON.stringify(salida));

}).listen(8080);
console.log('Listening port: 8080');