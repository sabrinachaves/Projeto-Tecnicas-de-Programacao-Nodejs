const fsPromises = require('fs').promises;
const path = require('path');
const http = require('http'); 

const server = http.createServer();
fsPromises.readdir('./reservas')
.then( reservas =>{
    server.on('request', (req, res) =>{
        const { method, url } = req;

        res.setHeader('Content-Type', 'application/json');
        if(method === 'GET' && reservas.includes(`${url.slice(10)}.json`)){
         fsPromises.readFile(`.${url}.json`, "utf-8")
         .then(conteudo =>{
            res.write(conteudo);
            res.end();
        })
    }else
    {
        res.write("Reserva não encontrada!");
        res.end();
    }
    })
    server.listen(8080);  
});


