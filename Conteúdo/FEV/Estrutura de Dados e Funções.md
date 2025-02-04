# 📚 Guia Completo de Estruturas de Dados e Funções em JavaScript

Este documento apresenta os conceitos básicos de **estruturas de dados** e **funções** no JavaScript, com exemplos práticos incluídos.

---

## **1. Estruturas de Dados**

### 🔹 1.1 Arrays
Um **array** é uma estrutura de dados que armazena uma lista ordenada de elementos. Cada elemento é acessado pelo índice.

#### **Exemplo:**
```javascript
const frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // Saída: 'Maçã'

// Adicionar ao final do array
frutas.push("Uva");
console.log(frutas); // ['Maçã', 'Banana', 'Laranja', 'Uva']

// Remover o último elemento
frutas.pop();
console.log(frutas); // ['Maçã', 'Banana', 'Laranja']
```

---



### 🔹 1.3 Pilhas (Stacks)
Uma **pilha** segue o princípio **LIFO** (Last In, First Out). Você adiciona e remove elementos apenas do topo.

#### **Exemplo:**
```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const pilha = new Stack();
pilha.push(5);
pilha.push(10);
console.log(pilha.peek()); // Saída: 10
pilha.pop();
console.log(pilha.peek()); // Saída: 5
```

---

### 🔹 1.4 Filas (Queues)
Uma **fila** segue o princípio **FIFO** (First In, First Out). O primeiro elemento a entrar é o primeiro a sair.

#### **Exemplo:**
```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }
}

const fila = new Queue();
fila.enqueue(1);
fila.enqueue(2);
console.log(fila.front()); // Saída: 1
fila.dequeue();
console.log(fila.front()); // Saída: 2
```

---

### 🔹 1.5 Dicionários (Objetos)
Um **dicionário** (ou objeto) armazena pares **chave-valor**.

#### **Exemplo:**
```javascript
const usuario = {
  nome: "Jairo",
  idade: 30,
  profissao: "Desenvolvedor"
};

console.log(usuario.nome); // Saída: 'Jairo'

// Adicionar uma nova chave
usuario.email = "jairo@email.com";

// Remover uma chave
delete usuario.profissao;

console.log(usuario);
// Saída: { nome: 'Jairo', idade: 30, email: 'jairo@email.com' }
```

---

## **2. Funções**

Funções são blocos de código que executam uma tarefa ou calculam um valor. Elas podem ser reutilizadas ao longo do programa.

---

### 🔹 2.1 Funções Nomeadas
#### **Exemplo:**
```javascript
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 3)); // Saída: 8
```

---

### 🔹 2.2 Funções Anônimas
Funções sem nome podem ser atribuídas a variáveis.

#### **Exemplo:**
```javascript
const subtrai = function (a, b) {
  return a - b;
};

console.log(subtrai(10, 4)); // Saída: 6
```

---

### 🔹 2.3 Arrow Functions
Uma forma curta de escrever funções.

#### **Exemplo:**
```javascript
const multiplica = (a, b) => a * b;

console.log(multiplica(4, 2)); // Saída: 8
```

---

### 🔹 2.4 Funções Assíncronas
Funções assíncronas lidam com operações que podem demorar, como buscar dados de uma API.

#### **Exemplo:**
```javascript
const fetchData = async () => {
  try {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
};

fetchData();
```

---

## **3. Dicas e Boas Práticas**

- **Escolha da Estrutura de Dados**: Use arrays para coleções simples, pilhas para operações LIFO, filas para FIFO e objetos para armazenar informações estruturadas.
- **Organize Funções**: Mantenha funções curtas e específicas para facilitar o entendimento e a reutilização.
- **Comentários e Legibilidade**: Documente o código e escolha nomes de variáveis claros.
- **Pratique**: Teste os exemplos acima no console do navegador ou em ferramentas como Node.js para consolidar o aprendizado.

---

🚀 **Com esse guia, você estará bem encaminhado para dominar as estruturas de dados e funções no JavaScript!**

