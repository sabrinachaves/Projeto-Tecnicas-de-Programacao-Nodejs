const fsPromises = require("fs").promises;
const path = require("path");
const assert = require("assert");

assert.ok(process.argv.length > 2);

const cpf = process.argv[2];

const caminhoDaReserva = path.join(__dirname, `./reservas/${cpf}.json`);

fsPromises.rm(caminhoDaReserva)
.then(() => {
    console.log("Reserva cancelada!");
});

