const perguntas = [
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let x = 10;",
        "const x = 10;",
        "var x = 10;"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '==' em JavaScript?",
      respostas: [
        "Compara valores e tipos de variáveis.",
        "Atribui um valor a uma variável.",
        "Converte um valor para uma string."
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'console.log()' faz?",
      respostas: [
        "Mostra uma caixa de diálogo no navegador.",
        "Exibe mensagens no console do navegador.",
        "Altera o estilo de um elemento HTML."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de criar uma função em JavaScript?",
      respostas: [
        "function minhaFuncao() {}",
        "var minhaFuncao() {}",
        "() => minhaFuncao {}"
      ],
      correta: 0
    },
    {
      pergunta: "Como se referencia um elemento HTML usando JavaScript?",
      respostas: [
        "getElement('elemento')",
        "document.find('elemento')",
        "document.getElementById('elemento')"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador lógico que representa 'ou' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model - uma linguagem de programação.",
        "Diretório de Objetos Móveis.",
        "Data Object Model - um modelo de dados."
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método utilizado para converter uma string para um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "toNumber()"
      ],
      correta: 0
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que representa uma única valor.",
        "Um tipo de dado que representa uma coleção ordenada de valores.",
        "Uma estrutura de controle de fluxo."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método usado para adicionar um elemento ao final de um array?",
      respostas: [
        "array.addEnd(elemento)",
        "array.push(elemento)",
        "array.append(elemento)"
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const templete = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + "de" + totalDePerguntas
  
  for(const item of perguntas) {
  const quizItem = templete.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
  const estaCorreta = event.target.value == item.correta
  corretas.delete(item)
  if(estaCorreta) {
    corretas.add(item)
    }
  mostrarTotal.textContent = corretas.size + "de" + totalDePerguntas
  }
  
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
  
  } 