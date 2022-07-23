const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// rl.question("Seu nome?", (resposta) =>{
//     console.log("Recebi a resposta");
// })

// rl.setPrompt(
//     `Digite sua opção:
//     1 - Criar usuário
//     2 - Criar viagem
//     `
//     );
//     rl.prompt();

function pergunta(pergunta){
    return new Promise((resolve, reject)=>{
        rl.question("Seu nome?", (resposta) =>{
            resolve(resposta);
        })
    })
}

rl.on('line', async (line) =>{
    const resposta = await pergunta("Nome?");
})

