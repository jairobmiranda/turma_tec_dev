const readline = require('readline');

// Cria a interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que retorna uma Promise para capturar o valor digitado
function perguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (resposta) => {
      resolve(resposta); // Resolve a Promise com a resposta do usuário
    });
  });
}

async function principal() {
  // Espera o valor digitado pelo usuário
  const valorDigitado = await perguntar('Digite um valor: ');

  // Agora você pode usar o valorDigitado fora do rl.question
  console.log(`Você digitou: ${valorDigitado}`);

  // Fecha a interface após a resposta
  rl.close();
}

// Chama a função principal
principal();
