const fsPromises = require("fs").promises;
const Reserva = require("./reserva");
const assert = require('assert');

assert.ok(process.argv.length > 2)

const nome = process.argv[2];
const cpf = process.argv[3];
const data =  process.argv[4];
const origem = process.argv[5];
const destino = process.argv[6];

const reserva = new Reserva(nome, cpf, data, origem, destino);

const fd = fsPromises.open(`./reservas/${cpf}.json`, 'w+')
.then(() => {
    fsPromises.writeFile(`./reservas/${cpf}.json`, JSON.stringify(reserva))
    .then(() =>{
        console.log("Reserva realizada com sucesso!");
    });
});



