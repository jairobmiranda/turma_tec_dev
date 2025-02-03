const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita uma entrada ao usuário
rl.question('Qual é o seu nome? ', (nome) => {
  console.log(`Olá, ${nome}!`);
  
  // Fecha a interface de leitura após a resposta
  rl.close();
});
