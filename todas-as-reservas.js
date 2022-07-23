const path = require("path");
const fsPromises = require("fs").promises;

const caminhoDiretorio = path.join(__dirname, "./reservas");

fsPromises.readdir(caminhoDiretorio)
.then((arquivos) =>{
    console.log("As reservas atuais são:");
    console.log(arquivos);
});
