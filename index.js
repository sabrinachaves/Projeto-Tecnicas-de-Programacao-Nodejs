const menu = require("./menu");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(
    `\nOlá, seja bem-vindo(a) ao GoTravel!
    ------------------------------------------------------------
    Processo: ${process.pid}
    Plataforma: ${process.platform}
    Arquitetura: ${process.arch}
    ------------------------------------------------------------\n`
);

menu();

process.exit();




